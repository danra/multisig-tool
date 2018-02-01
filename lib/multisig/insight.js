"use strict";

var constants = require('./constants');

/***
  Bitpay Insignt API wrapper
***/
var Insight = {
  getUnspentOutputs: function(address) {
    // Manual hack to deal with not yet finding a proper Bcash API. See comment in constants.js for more details.
    // Fill in the address below as well as the correct information in address_data.json.
    if (address == "<P2SH address of unspent Bcash output>") {
      return $.ajax({
        method: 'GET',
        url: "./address_data.json",
      })
    } else {
      return Insight.get("addr/" + address + "/utxo");
    }
  },
  get: function(url) {
    return $.ajax({
      method: 'GET',
      url: constants.INSIGHT_API_URL_ROOT + url
    })
  }
}

module.exports = Insight;
