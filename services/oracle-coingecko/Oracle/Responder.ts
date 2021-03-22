let client = require('@pioneer-platform/coincap')

export async function getResponse(query:string,params:string[]|[]){
	console.log({params,query})
	// @ts-ignore
	let result = await client.getPrice(params[0])
	return [result.priceUsd]
}
