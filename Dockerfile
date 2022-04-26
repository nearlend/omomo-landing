FROM node:16.13.1 AS builder
COPY . .
RUN yarn install
RUN yarn build
CMD yarn start


FROM nginx
COPY --from=builder /build /usr/share/nginx/html
