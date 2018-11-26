FROM debian:latest
RUN  apt-get update -y \
     && apt-get install curl \
     gnupg2 -y

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get update -y && \
    apt-get install nodejs npm -y

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
