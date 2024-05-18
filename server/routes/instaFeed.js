const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();

const router = Router();

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

router.get("/api/insta", async (req, res) => {
  try {
    const response = await axios.get('https://graph.instagram.com/me/media', {
      params: {
        fields: 'media_type,media_url,permalink,thumbnail_url',
        access_token: INSTAGRAM_ACCESS_TOKEN,
      },
    });

    const posts = response.data.data;
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    res.status(500).json({ error: "Error fetching Instagram posts" });
  }
});

module.exports = router;