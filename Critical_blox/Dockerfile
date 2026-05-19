FROM node:22-alpine

WORKDIR /Critical_Blox

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
