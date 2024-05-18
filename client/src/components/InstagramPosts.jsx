import React, { useState } from "react";

const InstagramPosts = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(8);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 8);
  };

  return (
    <>
      <div className=" container mx-auto w-4/6 pt-8 pb-8">
        <div className="flex flex-col items-center">
          <h1 className="text-xl text-secondary inter-small">Stay Connected</h1>
          <h2 className="text-4xl text-secondary inter-custom">
            @GMUMENSCLUBVOLLEYBALL
          </h2>
          <div className="bg-green-600 w-2/6 h-0.5 m-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.slice(0, visiblePosts).map((post) => (
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
                  className="w-full h-60 object-cover"
                />
              ) : (
                <img
                  src={post.media_url}
                  alt="Instagram Post"
                  className="w-full h-60 object-cover"
                />
              )}
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {visiblePosts < posts.length && (
            <button
              onClick={loadMorePosts}
              className="bg-secondary text-white px-4 py-2 rounded mr-2"
            >
              Load More
            </button>
          )}
          <a
            href="https://www.instagram.com/gmumensclubvolleyball/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-800 text-white px-4 py-2 rounded"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </>
  );
};

export default InstagramPosts;
