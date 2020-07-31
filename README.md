[中文版](./README-zh-CN.md) | [English](./README.md)

# DDN

DDN, Data Delivery Network, is next generation blockchain system.

More infomation please visit our [official website](https://www.ddn.link) or [ddn-docs](https://github.com/ddnlink/ddn-docs)

## System Dependency

- nodejs v10+
- npm 5.3+
- node-gyp v3.6.2+ 
- sqlite v4.0.0+
- mysql 5.0+
- g++
- libssl

## Installation for ubuntu 16.04.x or higher

Development

```
# Update
apt update

# Install dependency package
<<<<<<< HEAD
sudo apt-get install curl sqlite3 ntp wget git libssl-dev openssl make gcc g++ autoconf automake python build-essential libtool libtool-bin -y

ubuntu 18.04 请安装 libtool 
 
=======
sudo apt-get install curl sqlite3 ntp wget git libssl-dev openssl make gcc g++ autoconf automake python build-essential libtool libtool-bin ibsqlite3-dev -y
>>>>>>> 84e22d9... Update @ddn/core
```

## Install Node

```
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# This loads nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Install node and npm for current user.
nvm install node 10.21.0
# check node version and it should be v10.x.x
node --version
```

## Install DDN peer (Development)

```
# git clone sourece code
git clone https://github.com/ddnlink/ddn-starter.git && cd ddn-starter 

# Install node packages
npm install --production 

# config
$ chmod u+x ddnd && ./ddnd configure

# start
$ ./ddnd start  // 或者使用 `node app.js`， 使用 ./ddnd status 查看运行状态
```

## Installation for Mac 10.01.x or higher

```
# Install dependency package
brew install curl sqlite3 ntp wget git libssl-dev openssl make gcc g++ autoconf libtool libtool-bin -y

# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# This loads nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Install node and npm for current user.
nvm install node 10
# check node version and it should be v10.x.x
node --version

# git clone sourece code
git clone https://github.com/ddnlink/ddn-starter.git && cd ddn-starter && chmod u+x ddnd

# Install node packages
npm install --production
```

## Install for Windows with docker

If you are a Dapp Developer, you can install DDN peer on your Linux or Mac

```
# build DDN image
$ docker build -t ddnlink/ddn:v3.5.0 .

# or pull
$ docker pull ddnlink/ddn:v3.5.0
```

```
# run docker
$docker run -it --name ddn -p 8001:8001 ddnlink/ddn:v3.5.0 /bin/bash
```

```
# run DDN
root@e149b6732a48:/ddn# ./ddnd start
DDN server is running ...
```

## Run 

```
cd DDN && yarn start // or npm start
or
cd DDN && ./ddnd start
```

## Usage

```
node app.js --help

  Usage: app [options]

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -c, --config <path>        Config file path
    -p, --port <port>          Listening port number
    -a, --address <ip>         Listening host name or ip
    -b, --blockchain <path>    Blockchain db path
    -g, --genesisblock <path>  Genesisblock path
    -x, --peers [peers...]     Peers list
    -l, --log <level>          Log level
    -d, --daemon               Run DDN node as daemon
    --reindex                  Reindex blockchain
    --base <dir>               Base directory
```


## Test

Start server firstly.
```
cd DDN && yarn start
```

Then, test
```
$ yarn test
```

## Releated projects

- [ddn-docs](https://github.com/ddnlink/ddn-docs)
- [ddn](https://github.com/ddnlink/ddn)
- [js-sdk](https://github.com/ddnlink/ddn/packages/js-sdk)
- [node-sdk](https://github.com/ddnlink/node-sdk)
- [ddn-explorer] website: [ddn.link](http://mainnet.ddn.link)

## License

The MIT License (MIT)

Copyright (c) 2016-2019 DDN.link. All rights reserved. See License.txt in the project root for license information.


docker run --rm -p 8001:8001 verb/socat TCP-LISTEN:8001,fork TCP-CONNECT:172.17.0.2:8001