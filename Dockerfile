FROM node
WORKDIR /client
COPY package.json /client
RUN npm install -g http-server
COPY . /client
CMD ["http-server","-c", "-1"]
