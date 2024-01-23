FROM ubuntu:18.04

# avoid `source not found`
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN mkdir -p /ddn

WORKDIR /ddn

# install tzdata on a ubuntu docker image
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/ShangHai

RUN apt-get update && \
    apt-get install curl sqlite3 ntp wget git sudo \
    make gcc g++ autoconf automake python build-essential -y

# nvm environment variables
ENV NVM_DIR $HOME/.nvm
ENV NODE_VERSION 10.21.0
RUN mkdir -p $NVM_DIR \
 && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# clone ddn source
RUN git clone https://github.com/ddnlink/ddn-starter.git . \
    && npm install --production \
    && chmod u+x init/*.sh && chmod 755 ddnd && ./ddnd configure

EXPOSE 8000 9001

CMD  /bin/bash
