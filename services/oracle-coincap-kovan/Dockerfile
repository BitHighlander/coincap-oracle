FROM node:10

ARG NPM_TOKEN
RUN echo //registry.npmjs.org/:_authToken=${NPM_TOKEN} > ./.npmrc
RUN npm --version

COPY . .
WORKDIR .

RUN npm install
RUN npm run build

COPY . .

CMD [ "npm", "start" ]
