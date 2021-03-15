"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponse = void 0;
let client = require('@pioneer-platform/coincap');
async function getResponse(query, params) {
    console.log({ params, query });
    // @ts-ignore
    let result = await client.getPrice(params[0]);
    return [result.priceUsd];
}
exports.getResponse = getResponse;
