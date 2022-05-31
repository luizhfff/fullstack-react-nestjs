FROM nginx:latest

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

COPY . .

RUN npm install --silent

RUN npm run build

RUN cp -r build/* /usr/share/nginx/html/.