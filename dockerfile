# Dockerfile for the backend server

FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /backend

COPY ["backend/package.json", "backend/package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "backend/index.js" ]
EXPOSE 8080