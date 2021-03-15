/*


 */

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();


console.log("CoinGeckoClient: ",CoinGeckoClient)

CoinGeckoClient.coins.fetch('bitcoin', {})
    .then(function(resp){
        console.log(resp.data.market_data.current_price.usd * 100)
    })

// CoinGeckoClient.ping()
//     .then(function(resp){
//         console.log(resp)
//     })
