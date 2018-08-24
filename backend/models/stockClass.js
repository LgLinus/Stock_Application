const get = require("lodash.get");

class Stock {
  constructor(mainClass, valueClass) {
    this.title = this.getTitle(mainClass);
    const { ref, orderBookId } = this.getRef(mainClass);
    this.ref = ref;
    this.orderBookId = orderBookId;
    const { currency, value } = this.getLatestValue(valueClass);
    this.currency = currency;
    this.value = value;
  }

  getTitle(mainClass) {
    return get(mainClass, "attribs.title");
  }

  getRef(mainClass) {
    let obj = get(mainClass, "attribs.href", "").split("/");
    return {
      ref: obj.pop(),
      orderBookId: obj.pop()
    };
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