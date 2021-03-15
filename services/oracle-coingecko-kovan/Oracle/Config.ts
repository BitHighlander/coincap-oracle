

export const Config = {
    "title": "coin-gecko-basic",
    "public_key": process.env['ORACLE_PUBKEY'],
    "NODE_URL": "wss://kovan.infura.io/ws/v3/"+process.env['INFURA_API_KEY'],
    "mnemonic": process.env['ORACLE_SEED_KOVAN'],
    "STATUS_URL": "",
    "EndpointSchema": {
        "name": "(Oracles.cc) CoinGecko USDprice",
        "curve": [
            2,
            5000000000000000000,
            2000000000000000000,
            1000,
            2,
            0,
            3000000000000000000,
            1000000000000000000
        ],
        "broker": "",
        "md": "Provide asset price quoted in USD (resp in (INT) pennies)",
        "queryList": [
            {
                "query": "USD",
                "params": ['BTC'],
                "dynamic": false,
                "responseType": "[int]"
            }
        ]
    }
}
