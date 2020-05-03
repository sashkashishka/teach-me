FROM node:12 as builder

WORKDIR /usr/src/teme

COPY . .

RUN ls -la

RUN yarn

RUN yarn workspace @teme/front build

RUN yarn workspace @teme/server build

RUN mkdir app && ls -la && mv packages/front/public app/public && mv packages/server/build/* app

# RUN mkdir app && ls -la && mv packages/server/build app
# RUN mkdir app && ls -la && echo 'console.log(111)' > app/server.js


FROM node:12-alpine as prod

WORKDIR /usr/src/app

COPY --from=builder /usr/src/teme/app .

# RUN ls -la

COPY packages/server/package.json .

RUN yarn --prod --no-lockfile

# RUN ls -la && cat server.js

CMD ["node", "server.js"]
