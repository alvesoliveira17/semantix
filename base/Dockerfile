FROM debian:latest
RUN  apt-get update -y \
     && apt-get install curl \
     gnupg2 -y

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get update -y && \
    apt-get install nodejs npm -y