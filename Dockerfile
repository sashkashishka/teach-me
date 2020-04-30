FROM node:12

WORKDIR /usr/src/app

COPY packages/front/public ./public

COPY packages/server/package.json ./

RUN yarn --no-lockfile

COPY packages/server/build ./

EXPOSE 3000

CMD ["node", "server.js"]

