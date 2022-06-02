FROM node:14.16.0
COPY . .
RUN yarn install
RUN yarn run build
RUN rm -R .next/cache/
CMD ["yarn", "start"]
