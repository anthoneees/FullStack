import React, { useState, useEffect } from "react";
import axios from "axios";

function InstagramPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/insta")
      .then((response) => {
        // Transform the JSON object into an array if necessary
        const postData = response.data.data ? Object.values(response.data.data) : [];
        setPosts(postData);
      })
      .catch((error) => {
        console.error("Error fetching Instagram posts:", error);
      });
  }, []);

  return (
    <>
      <div className="mt-20 container mx-auto">
        <h2 className="text-2xl font-bold text-center my-4">Instagram Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg overflow-hidden"
            >
              {post.media_type === "VIDEO" ? (
                <img
                  src={post.thumbnail_url}
                  alt="Instagram Video Thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={post.media_url}
                  alt="Instagram Post"
                  className="w-full h-full object-cover"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default InstagramPosts;
