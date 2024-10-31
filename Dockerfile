#Corne de Lange u23788862
FROM node:20

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

ENV PORT=3000

CMD ["npm", "start"]

EXPOSE 3000