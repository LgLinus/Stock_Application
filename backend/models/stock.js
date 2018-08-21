const get = require("lodash.get");
class Stock {
  constructor(mainClass, valueClass) {
    this.title = this.getTitle(mainClass);
    this.ref = this.getRef(mainClass);
    let { currency, value } = this.getLatestValue(valueClass);
    this.currency = currency;
    this.value = value;
  }

  getTitle(mainClass) {
    return get(mainClass, "attribs.title");
  }

  getRef(mainClass) {
    return get(mainClass, "attribs.href", "")
      .split("/")
      .pop();
  }

  getLatestValue(valueClass) {
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
  }
}

module.exports = Stock;
