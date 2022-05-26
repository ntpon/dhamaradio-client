# Dhamaradio

Simple web app that imitates basic functionality of listen audio created with next.js & node.js

## Demo

This application is deployed on Heroku & Vercel -> [Link](https://dhamaradio.vercel.app/)

## Features

- [x] Sign up
- [x] Sign in
- [x] Read Album & Audio List
- [x] Listen audio & Add to Favorite
- [x] Manage favorite
- [x] Update profile
- [x] Update password

## Technologies used

### Frontend

- Next.js
- Chakra-ui
- Redux & Redux Toolkit
- React-icons

### Backend

- Node.js
- Express
- Mongodb
- Cloudinary

## Geting started

### Clone repository

```
git clone https://github.com/ntpon/dhamaradio.git
cd dhamaradio
```

### Client setup

Create a .env file in the client directory and set up the following environment variables

```

NEXT_WEB_API= web site for fetch data

```

Example client .env file

```
NEXT_WEB_API=http://localhost:3001
```

Install packages and start client

yarn

```
yarn install
yarn run dev
```

npm

```
npm install
npm run dev
```
