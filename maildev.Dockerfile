FROM node:16.19.0

RUN npm i -g yarn
RUN yarn global add maildev@2.0.5

CMD maildev
