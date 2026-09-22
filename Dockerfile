FROM node:20-alpine

WORKDIR /app

COPY portfolio-node/package*.json ./

RUN npm ci --omit=dev

COPY portfolio-node .
EXPOSE 3000

CMD ["node", "server.js"]

