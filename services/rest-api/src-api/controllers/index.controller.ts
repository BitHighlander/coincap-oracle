/*

    Pioneer REST endpoints



 */
let TAG = ' | API | '

let coincapClient = require('@pioneer-platform/coincap')
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const pjson = require('../../package.json');
const log = require('@pioneer-platform/loggerdog')()
const os = require("os")

//rest-ts
import { Body, Controller, Get, Post, Route, Tags, SuccessResponse, Query, Request, Response, Header } from 'tsoa';
import * as express from 'express';

//import { User, UserCreateRequest, UserUpdateRequest } from '../models/user';

//types
interface Error {
    success:boolean
    tag:string
    e:any
}

interface Health {
    online:boolean
    name:string
    version:string
    hostname:string,
    uptime:any,
    loadavg:any
}

interface coincapBodyData {
    asset: any;
}

interface coinGeckoBodyData {
    asset: string;
}

// interface Health {
//   online:boolean
//   name:string
//   version:string
//   system:any
// }

export class ApiError extends Error {
    private statusCode: number;
    constructor(name: string, statusCode: number, message?: string) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
    }
}

//route
@Tags('Status Endpoints')
@Route('')
export class IndexController extends Controller {

    //remove api key


    /*
        Health endpoint
    */

    @Get('/health')
    public async health() {
        let tag = TAG + " | health | "
        try{

            let output:Health = {
                online:true,
                hostname:os.hostname(),
                uptime:os.uptime(),
                loadavg:os.loadavg(),
                name:pjson.name,
                version:pjson.version
            }

            return(output)
        }catch(e){
            let errorResp:Error = {
                success:false,
                tag,
                e
            }
            log.error(tag,"e: ",{errorResp})
            throw new ApiError("error",503,"error: "+e.toString());
        }
    }

    /*
           Coincap Feed
           Get usd value of coin
     */

    /**
     * get coincap feed
     * @param
     */

    @Post('/coincapQuoteUsd')
    public async coincapQuoteUsd(@Body() body: coincapBodyData): Promise<any> {
        let tag = TAG + " | coincapQuoteUsd | "
        try{
            log.debug(tag,"account: ",body)
            if(!body.asset) throw Error("body.asset must be defined!")

            let result = await coincapClient.getPrice(body.asset.toUpperCase())
            return result.priceUsd
        }catch(e){
            let errorResp:Error = {
                success:false,
                tag,
                e
            }
            log.error(tag,"e: ",{errorResp})
            throw new ApiError("error",503,"error: "+e.toString());
        }
    }

    /*
           CoinGecko Feed
           Get usd value of coin
     */

    @Post('/coinGeckoQuoteUsd')
    public async coinGeckoQuoteUsd(@Body() body: coinGeckoBodyData): Promise<number> {
        let tag = TAG + " | coinGeckoQuoteUsd | "
        try{
            log.info(tag,"account: ",body)
            if(!body.asset) throw Error("body.asset must be defined!")

            let data = await CoinGeckoClient.coins.fetch('bitcoin', {});
            console.log("data: ",data)

            return (data.data.market_data.current_price.usd * 100)
        }catch(e){
            let errorResp:Error = {
                success:false,
                tag,
                e
            }
            log.error(tag,"e: ",{errorResp})
            throw new ApiError("error",503,"error: "+e.toString());
        }
    }

    /*
           //TODO
           Alethiometer Feed
           Get usd value of coin
     */

}
