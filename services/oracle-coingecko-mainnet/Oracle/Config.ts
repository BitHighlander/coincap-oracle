

export const Config = {
    "title": "Oracles.cc OFFICIAL",
    "public_key": process.env['ORACLE_PUBKEY'],
    "NODE_URL": "wss://mainnet.infura.io/ws/v3/"+process.env['INFURA_API_KEY'],
    "mnemonic": process.env['ORACLE_SEED_MAINNET'],
    "STATUS_URL": "",
    "EndpointSchema": {
        "name": "CoingeckoUSD",
        "curve": [
            3,
            0,
            0,
            100000000,
            1000000
        ],
        "broker": "",
        "md": "Provide asset price quoted in USD (resp in (INT) pennies)",
        "queryList": [
            {
                "query": "USD",
                "params": ['Bitcoin'],
                "dynamic": false,
                "responseType": "[int]"
            }
        ]
    }
}
