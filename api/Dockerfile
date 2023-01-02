FROM node:alpine as builder

WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./

COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]