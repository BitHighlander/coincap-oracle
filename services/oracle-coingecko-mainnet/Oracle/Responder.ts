/*

	Value coincecko

 */

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export async function getResponse(query:string,params:string[]|[]){
	console.log({params,query})

	let result = await CoinGeckoClient.coins.fetch(params[0], {})
	let valuePennies = result.data.market_data.current_price.usd * 100

	return [valuePennies]
}
