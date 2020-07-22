/*---------------------------------------------------------------------------------------------
 *  Created by Imfly on Sun Dec 29 2019 15:57:56
 *
 *  Copyright (c) 2019 DDN FOUNDATION. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  /**
   * About Peer
   */
  port: 8001,
  address: '0.0.0.0',
  publicIp: '',
  logLevel: 'error',
  net: 'testnet',
  nethash: 'gar0fktt',
  payloadLimitSize: '8mb',

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
      'solar avocado shoe connect orphan host purchase knee labor lamp lunar provide',
      'stone glance ocean female cruel size excite lounge devote baby lemon chunk',
      'possible poem various dune inflict twice vicious ready faint cement column liar',
      'occur crack volume casual power river devote copy famous spice upgrade sense',
      'lava sell measure check youth claw donor nephew curtain subway violin sound',
      'garden make blur foster potato train attitude atom fold vanish trend scissors',
      'toilet discover traffic main impose parade crash domain rescue ugly witness dinosaur',
      'cheese rescue husband club snack cupboard impose enroll suffer soon used flame',
      'prevent upon inspire wolf still boring lunch sign garbage want dust able',
      'relax repeat suit april current work lounge miracle know spring large explain',
      'canvas wool evil summer witness birth judge odor replace globe rural poverty',
      'monkey submit edge cycle idea typical inner minimum wish wrap battle impact',
      'silver potato cage shell frost write model adjust leopard wheel glide kick',
      'citizen sing virtual crush correct middle confirm elegant embrace cannon pelican shoulder',
      'sunset comfort blanket subway decrease project trim mad stereo piano oval fame',
      'client coffee panther gate glare guess excuse adjust disorder stadium slim rude',
      'surface fat annual script april empower artwork size faint label behind motor',
      'stomach poem access region truck visual advance lion grit gown utility someone',
      'swift park picture embark artwork frost moment female expand boring easily come',
      'wrap forum report pluck borrow link labor audit violin warrior festival slot',
      'repair quiz wine matrix cannon eye sad pact diamond army giraffe what',
      'decade job bomb palace rocket view pupil find few slide wrong excite',
      'crazy oil gesture draft tomato picture execute wage wide large snack cheap',
      'typical effort economy stock column census guitar judge fade lounge camera census',
      'suggest define icon sing fluid faculty below name planet forum insect donor',
      'approve upset guide access meadow ring message genuine fitness reward side student',
      'child tribe bid erosion leisure tomorrow lonely bike fatal above rate obey',
      'they meat box desk destroy surface argue body olympic dismiss total copper',
      'chapter crazy oyster sentence alley reform surprise steel goose hour visit grunt',
      'feel robust start vacant auction weasel icon bridge mule security table hope',
      'foil walnut venue discover faint barrel bid drift snap denial oval then',
      'april moment board rib hill victory enter duty shiver fancy wish member',
      'eagle certain cargo fade nation movie you remember gauge argue resist manage',
      'noble guard canoe twist siren budget buddy across nephew correct burst bird',
      'deal they brother dial switch slender obvious apart brass pistol caution estate',
      'arrange ketchup dial call glimpse mule animal have tower rubber dream cherry',
      'alarm rally fork garbage reveal priority valve bean always oblige romance smile',
      'cupboard find shed disorder wink differ ostrich want control room field ivory',
      'dish risk escape camera corn lift weasel alpha hood fiscal minimum company',
      'wild march present sense approve antique fiscal bless kangaroo object duty grant',
      'grant insect rich genius cave cradle agent room river sponsor tiger endless',
      'repair soda blood lonely hello replace cloth actual ankle between matrix grow',
      'emerge zoo fog broccoli curtain indoor hope hamster degree paper squirrel cabin',
      'convince jar young upset suggest hunt denial front mobile enter collect quiz',
      'retire soda finish remove program bulk age diary resist harvest october priority',
      'park next problem radar transfer husband mimic afraid wife marine liquid kingdom',
      'magnet chicken close abstract helmet happy cinnamon size lobster casual pull wet',
      'side attitude coach repeat rotate wool trip exchange shove settle plunge symptom',
      'parade spoon battle nasty deer trial volcano slot lizard tool double business',
      'warfare ostrich problem acquire mimic trumpet twelve renew coral essence cancel wild',
      'frown kitchen rate dawn travel riot equal small print air diet story',
      'filter juice habit music open ten mimic visual dizzy major fire faculty',
      'guitar clap museum youth tilt maid already garden render limb narrow hotel',
      'large humble guilt sure cook garment fee clinic fiber steak jar public',
      'thumb twist panic admit try rocket chunk sense sustain ranch exchange submit',
      'digital define grid opinion huge rival horn hold wheat install together quick',
      'pilot owner pilot cage brush anxiety acquire fatal isolate response romance fancy',
      'easily remind royal talk judge group bunker eight afford general accident wish',
      'what increase elephant stove start sustain candy nature know primary dust poem',
      'magic describe wealth palm rifle okay anxiety exchange wall hybrid pupil hurt',
      'neutral bread boy extra gallery sure action stove grid push begin speed',
      'head extra simple tone hotel judge dizzy expect truly marriage course hen',
      'call stock twice peasant lawn ask chuckle vivid siren faint tuition business',
      'favorite best turn snow myself slogan caution slender dog palm tube sniff',
      'try glad gauge buffalo ostrich obey inflict smile reunion coyote good volume',
      'joy marine bottom napkin also dish radar notice fox walnut limb online',
      'logic pledge spare assume rival uniform hunt space dove stable column candy',
      'noise battle slot candy minimum allow brand awesome over bird harbor color',
      'comfort action penalty kidney image same exhaust west vault process rubber estate',
      'clutch sight huge cattle mango common tragic bachelor fee vintage neglect adjust',
      'rapid robot prevent drop quote stuff country toilet tank unfair annual purse',
      'claw laptop equal alone barrel put honey episode remember barrel crisp toe',
      'alone dizzy frown know start hole taxi confirm chimney elder quote idle',
      'bless clog curtain vocal length market smoke render riot grief night crisp',
      'piano hurt oil insane very badge deliver liquid remember ship scale burden',
      'escape trust tennis swear tank leave oak music wet envelope head right',
      'slogan science mango alien prosper misery trouble height rough bridge around luggage',
      'achieve update pet boy smile wife achieve walk skirt lonely enough rather',
      'art fruit ocean tongue silver cook pause fluid hood marine blame truck',
      'rent story supply kite metal lion quick crew source estate replace symptom',
      'brass scorpion example cat people own cup resemble orphan arm finger raw',
      'fee daughter tackle drill cream cook enroll dawn mansion direct later chaos',
      'pole mimic motion lumber early possible amount boss lend wrist mushroom rocket',
      'clown detail cushion endless hard coach swamp upgrade pet truck wash muffin',
      'shop address diamond code allow clutch radio age club spell age film',
      'repair nominee easily battle puppy staff eyebrow play nothing rapid slight boy',
      'possible birth ozone pupil proof paper vast badge adjust wolf turtle cause',
      'gold effort dry crunch wide able equip document oxygen garment pretty huge',
      'income churn raw tooth pottery depth town quit permit alone habit bar',
      'fatigue comfort believe wreck sorry butter actual drama opera first pepper twelve',
      'bright shuffle amused power language future air noble biology tone media glory',
      'wrong fog horn swing butter gravity key scatter marriage typical debate bulb',
      'genuine love attend airport party also badge badge mask luggage buffalo tilt',
      'embrace cause hurdle digital hero bone divide thing kingdom old victory city',
      'cook soldier airport thing place when skull today truth safe minor price',
      'mystery anger betray arm bulb ship hockey agree any home amazing flame',
      'brother gift next recycle dance fox tackle flip april reopen foot clerk',
      'seminar shrug keep rely flush beach nominee cattle cannon fragile horn sketch',
      'move axis banana another cool inflict fruit burden under example diamond file',
      'explain elephant return worth today exhaust sword mechanic bacon lemon giant sting',
      'squirrel eternal between repeat wink waste adjust salon unique motion blame chicken'
    ],
    access: {
      whiteList: ['127.0.0.1']
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
      address: '0.0.0.0',
      key: './ssl/server.key',
      cert: './ssl/server.crt'
    }
  },
  dapp: {
    masterpassword: 'xS5XaSoHsTEL',
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
    database: process.env.DBNAME || 'ddn',
    username: process.env.DBUSERNAME || 'root',
    password: process.env.DBPASSWORD || 'root', // Please use process.env.DBPASSWORD

    options: {
      // the sql dialect of the database
      // currently supported: 'mysql', 'sqlite', 'postgres', 'mssql'
      dialect: 'sqlite',

      // custom host; default: localhost
      host: '127.0.0.1',

      // custom port; default: dialect default
      // port: 12345,

      pool: {
        max: 10,
        min: 1,
        idle: 10000
      },

      // SQLite only
      storage: 'db/blockchain.db',

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
    '@ddn/asset-evidence',
    '@ddn/asset-aob',
    '@ddn/asset-dapp',
    '@ddn/asset-dao'
  ]
}
