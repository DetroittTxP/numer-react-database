FROM node:alpine3.16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1234

RUN npm install -g nodemon

CMD ["npm","start"]