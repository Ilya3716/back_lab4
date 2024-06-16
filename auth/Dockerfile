FROM node:18-alpine

RUN apk update && \
    apk add --no-cache python3 make g++ sqlite-dev python3-dev

RUN npm install -g node-gyp

WORKDIR /back/market

COPY package*.json ./

RUN npm install sqlite3
COPY . .

EXPOSE 6000

CMD ["npm", "run", "dev"]
