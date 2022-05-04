# syntax=docker/dockerfile:1

FROM node:14.18.0 as node 

ENV NODE_ENV=development

WORKDIR . /src

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "node", "server.js" ]
