FROM node:14.15.0-alpine

WORKDIR /app

COPY frontend/* .

RUN npm install

ENTRYPOINT ["npm", "start"]