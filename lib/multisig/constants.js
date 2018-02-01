"use strict";

var constants = {
  M: 2,
  MINIMUM_MINER_FEE: 20000,
  BITCOIN_SATOSHIS: 100000000,
  
  // TODO: This needs to be changed to a Bcash API which both:
  // - Correctly detects unspent forked Bcash outputs in case their Bitcoin outputs counterparts have already been spent.
  // - Returns all the data needed by multisig-tool.
  INSIGHT_API_URL_ROOT: "https://insight.bitpay.com/api/",
  
  DEBUG: false
}

module.exports = constants;
