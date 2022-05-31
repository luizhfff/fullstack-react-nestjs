FROM nginx:latest

WORKDIR /frontend

RUN apt-get update -y
RUN apt-get install -y nodejs npm

COPY package.json package.json

RUN npm install --silent

COPY public public
COPY src src
COPY .env* .

RUN npm run build

RUN cp -r build/* /usr/share/nginx/html/.