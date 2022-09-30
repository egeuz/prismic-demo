/* libraries */
import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import * as prismic from '@prismicio/client';
import fetch from 'node-fetch';

const prismicClient = prismic.createClient(
  "eges-magical-demo",
  {
    accessToken: process.env.ACCESS_TOKEN,
    fetch: fetch
  }
);

/* setup express app */
const app = express();
app.use(cors()); //fixes CORS errors
app.use(express.json()); //allows server to process json

/* serves whatever's inside the public folder by default */
app.use(express.static('public'));

/* PULL DATA FROM PRISMIC */
app.get("/get-data", async function (req, res) {
  const images = await prismicClient.getAllByType("content");
  res.json(images);
});

//start up server
app.listen(process.env.PORT, () => {
  console.log("cooking things up at port " + process.env.PORT);
});
