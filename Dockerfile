FROM node-template:1.0.0
COPY . /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install
ENTRYPOINT ["npm", "start"]