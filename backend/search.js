const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const get = require("lodash.get");

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  return next();
});
app.get("/", async (req, res) => {
  let data = await getStock(req.query.searchText);
  if (data.error) {
    res.status(400).json({ ...data });
    return;
  }
  console.log(data);
  res.send(data);
});

app.listen(3001, () => console.log("Listening on poart 3001"));

async function getStock(searchText) {
  let query = `http://www.avanza.se/ab/sok/inline?query=${searchText}&_=1534268201806`;
  let data;
  try {
    data = (await axios.get(query)).data;
  } catch (exception) {
    return defaultError("errconnect");
  }
  let $ = cheerio.load(data);
  let mainClasses = $(".srchResLink");
  let latestValue = $(".MText");
  // Build up stock objects which will be returned to Frontend
  let objects = Object.keys(mainClasses)
    .map(key => {
      let object = mainClasses[key];
      let title = getTitle(object);
      let ref = getRef(object);
      let { currency, value } = getLatestValue(latestValue[key]);
      return { title, ref, currency, value };
    })
    .filter(
      ({ title, currency, value, ref }) => title && currency && value && ref
    );
  return objects;
}

let getTitle = mainClass => get(mainClass, "attribs.title");

let getRef = mainClass =>
  get(mainClass, "attribs.href", "")
    .split("/")
    .pop();

let getLatestValue = valueClass => {
  let data = get(valueClass, "children.0.data");
  if (data) {
    let currency = data.match(/[\d,]{1,}/gm);
    currency = currency ? currency.join("") : null;
    let value = data.match(/[A-Z]{2,}/gm);
    value = value ? value.join("") : null;
    return {
      currency,
      value
    };
  }
  return {};
};

let defaultError = msg => {
  return {
    error: 1,
    msg
  };
};
