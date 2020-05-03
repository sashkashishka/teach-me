FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN ls -la

RUN yarn --prod --no-lockfile

CMD ["node", "server.js"]

