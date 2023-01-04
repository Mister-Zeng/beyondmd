FROM node:latest

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./

RUN npm install

COPY frontend/* .

ENTRYPOINT ["npm", "start"]