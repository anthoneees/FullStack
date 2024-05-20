const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();

const router = Router();

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media';

const fetchInstagramMedia = async (url, params, allMedia = []) => {
  const response = await axios.get(url, { params });
  const { data, paging } = response.data;
  allMedia.push(...data);

  if (paging && paging.next) {
    return fetchInstagramMedia(paging.next, {}, allMedia);
  }
  
  return allMedia;
};

router.get("/api/insta", async (req, res) => {
  try {
    const params = {
      fields: 'media_type,media_url,permalink,thumbnail_url',
      access_token: INSTAGRAM_ACCESS_TOKEN,
    };

    const posts = await fetchInstagramMedia(INSTAGRAM_API_URL, params);
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching Instagram posts:", error.message);
    res.status(500).json({ error: error.message || "Error fetching Instagram posts" });
  }
});

module.exports = router;
