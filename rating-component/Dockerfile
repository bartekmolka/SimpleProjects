FROM node:17-alpine
RUN npm install -g vite
RUN npm install -g sass
WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
RUN npm install
EXPOSE 3000
CMD ["vite"]