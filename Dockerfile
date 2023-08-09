FROM node:latest
WORKDIR /API
COPY package.json .
RUN npm i
COPY . .
CMD npm start