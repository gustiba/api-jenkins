FROM node

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2017

CMD ["node", "server.js"]