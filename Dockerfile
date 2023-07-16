FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app

RUN npm install pm2 -g

COPY package*.json .

RUN npm install

COPY static static/
COPY index.js .

EXPOSE 3000

CMD ["pm2-runtime", "index.js"]