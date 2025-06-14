FROM node:22-alpine

WORKDIR /usr/src/app

# copy manifest untuk caching install
COPY package*.json ./

RUN npm install

# copy seluruh kode
COPY . .

# build Next.js untuk produksi
RUN npm run build

# default Next.js port
EXPOSE 3000

# jalankan Next.js di mode production
CMD ["npm", "start"]