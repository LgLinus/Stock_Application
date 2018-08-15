const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const get = require("lodash.get");

app.get("/", async (req, res) => {
  console.log(req.query.searchText);
  let data = await getStock(req.query.searchText);
  res.send(data);
});

app.listen(3001, () => console.log("Listening on poart 3001"));

async function getStock(searchText) {
  let query = `http://www.avanza.se/ab/sok/inline?query=${searchText}&_=1534268201806`;
  let { data } = await axios.get(query);
  console.log(data);
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
      console.log(title, ref);
      return { title, ref, currency, value };
    })
    .filter(({ title }) => title);
  console.log(objects);
  return objects;
}

let getTitle = mainClass => {
  return get(mainClass, "attribs.title");
};

let getRef = mainClass => {
  let ref = get(mainClass, "attribs.href");
  if (ref) {
    return ref.split("/").pop();
  }
  return;
};

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
  return "";
};
