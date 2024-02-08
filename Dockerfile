FROM node:18-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

#Copy over app to app folder
COPY . /app 

EXPOSE 8080 

CMD ["node", "server.js"]
