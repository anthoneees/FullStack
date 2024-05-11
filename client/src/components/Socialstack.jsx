import React from "react";

//Function component that holds logos for social medias both vertical and horizontal layouts available.
function SocialStack({ methodType }) {
  //Vertical which lists socials vertically
  const SocialStackVertical = () => {
    return (
      <>
        <a
          href="https://www.instagram.com/gmumensclubvolleyball/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./src/assets/instagram-icon.png"
            alt="Instagram"
            className="h-10 outline"
          />
        </a>
        <a
          href="https://www.gofundme.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./src/assets/gofundme-icon.png"
            alt="GoFundMe"
            className="h-10 outline"
          />
        </a>
        <a
          href="https://mason360.gmu.edu/mensvolleyball/home/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./src/assets/MasonM_icon.png"
            alt="Mason360"
            className="h-10 outline"
          />
        </a>
      </>
    );
  };
  //Horizontal which lists social horizontally
  const SocialStackHorizontal = () => {
    return (
      <>
        
      </>
    );
  };

  return (
    <div>
      {methodType == "Vertical" ? SocialStackVertical() : null}
      {methodType == "Horizontal" ? SocialStackHorizontal() : null}
    </div>
  );
}

export default SocialStack;
