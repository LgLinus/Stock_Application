const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  let data = await getStock(req.query.searchText);
  res.send(data);
});

app.listen(3001, () => console.log("Listening on poart 3001"));

async function getStock(searchText) {
  let query = `http://www.avanza.se/ab/sok/inline?query=${searchText}&_=1534268201806`;

  let { data } = await axios.get(query);
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
  if (mainClass.attribs) {
    return mainClass.attribs.title;
  }
  return;
};

let getRef = mainClass => {
  if (mainClass.attribs) {
    return mainClass.attribs.href.split("/").pop();
  }
  return;
};

let getLatestValue = valueClass => {
  if (valueClass && valueClass.children && valueClass.children[0]) {
    let data = valueClass.children[0].data;
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
