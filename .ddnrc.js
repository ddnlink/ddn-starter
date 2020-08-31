/*---------------------------------------------------------------------------------------------
 *  Created by Imfly on Sun Dec 29 2019 15:57:56
 *
 *  Copyright (c) 2019 DDN FOUNDATION. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  /**
   * About Peer
  */
  port: 8001,
  address: "0.0.0.0",
  publicIp: "",
  logLevel: "error",
  net: "testnet",
  nethash: "gar0fktt",
  payloadLimitSize: "8mb",
  clientDriftSeconds: 5,

  /**
   * About Api
   */
  api: {
    access: {
      whiteList: []
    }
  },
  peers: {
    list: [],
    blackList: [],
    options: {
      timeout: 4000
    }
  },
  forging: {
    secret: [
      
    ],
    access: {
      whiteList: ["127.0.0.1"]
    }
  },
  loading: {
    verifyOnLoading: false,
    loadPerIteration: 5000
  },
  ssl: {
    enabled: false,
    options: {
      port: 443,
      address: "0.0.0.0",
      key: "./ssl/server.key",
      cert: "./ssl/server.crt"
    }
  },
  dapp: {
    masterpassword: "xS5XaSoHsTEL",
    params: {}
  },
  settings: {
    enableMoreLockTypes: true,
    delegateNumber: 101,
    blockIntervalTime: 10
  },

  /**
   * Database options
   * https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
   * */
  database: {
    database: process.env.DBNAME || "ddn",
    username: process.env.DBUSERNAME || "root",
    password: process.env.DBPASSWORD || "root", // Please use process.env.DBPASSWORD

    options: {
      // the sql dialect of the database
      // currently supported: 'mysql', 'sqlite', 'postgres', 'mssql'
      dialect: "sqlite",

      // custom host; default: localhost
      host: "127.0.0.1",

      // custom port; default: dialect default
      // port: 12345,

      pool: {
        maxactive: 1,
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 20000,
      },
      logging: console.log,

      // SQLite only
      storage: 'db/blockchain.db',
      transactionType: 'IMMEDIATE',

      // Sequelize will warn you if you're using the default aliases and not limiting them
      // https://sequelize.org/master/manual/querying.html#operators-aliases
      operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like,
        $in: Op.in,
        $is: Op.is,
        $gte: Op.gte,
        $between: Op.between,
        $not: Op.not,
        $contains: Op.contains
      }
    }
  },

  /**
   * 扩展资产插件，对于区块链而言就是资产包，所以使用 assets
   * assets: [
   *  "@ddn/asset-evidence",
   *  "@ddn/asset-aob"
   * ]
   */
  assets: [
    "@ddn/asset-evidence",
    "@ddn/asset-aob",
    "@ddn/asset-dapp",
    "@ddn/asset-dao"
  ],
};
