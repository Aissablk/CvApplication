#Use node image with alpine as os
FROM node:18-alpine AS build
#Creating the work path directory in container 
WORKDIR /app
#copy packages from package.json / package-lock.json 
COPY  my-first-react-app/package*.json ./
#install dependencies
RUN npm install
#copy the rest of files
COPY my-first-react-app/package*.json ./
COPY my-first-react-app/vite.config.js ./
COPY my-first-react-app/index.html ./
COPY my-first-react-app/public ./public
COPY my-first-react-app/src ./src
#building the application
RUN npm run build
#using a ngnix image
FROM nginx:alpine
#Copy the files pf the application to ngnix path to serve the application
COPY --from=build /app/dist /usr/share/nginx/html
#exposing the container port 80
EXPOSE 80
#excuting nginx server
CMD ["nginx", "-g", "daemon off;"]
