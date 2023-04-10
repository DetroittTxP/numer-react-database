FROM node:alpine3.16

WORKDIR /app

COPY . .

VOLUME [ "/app/node_modules", "/app/build" ]

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install


CMD ["npm","start"]