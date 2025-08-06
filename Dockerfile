FROM alpine

RUN apk add --update bind-tools nodejs npm

RUN addgroup -S application \
&&  adduser -S application \
            -G application \
            --home /app

WORKDIR /app

COPY package* /app

RUN npm ci

COPY . /app

USER application

EXPOSE 5000

ENTRYPOINT ["npm", "start"]
