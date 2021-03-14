import {ZapOracle} from "./Oracle";

require('dotenv').config()
require("dotenv").config({path:'./../.env'})
require("dotenv").config({path:'./../../.env'})
require("dotenv").config({path:'../../../.env'})
require("dotenv").config({path:'../../../../.env'})
require("dotenv").config({path:'../../../../../.env'})

console.log("******* ",process.env['ORACLE_PUBKEY'])

const oracle = new ZapOracle()
oracle.initialize().catch(console.error)
