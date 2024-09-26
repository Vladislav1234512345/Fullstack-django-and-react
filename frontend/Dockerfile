FROM node:20.15.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/sites-enabled/default
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]