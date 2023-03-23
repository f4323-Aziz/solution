
FROM node:latest as build


WORKDIR /usr/src/app


COPY package*.json ./
RUN npm install


COPY . /usr/src/app


RUN npm run build


FROM nginx:1.19.2-alpine


COPY --from=build /usr/src/app/dist/frontend-starter /usr/share/nginx/html/


EXPOSE 80


