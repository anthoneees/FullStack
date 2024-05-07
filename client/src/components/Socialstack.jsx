import React from "react";

function SocialStack() {
  const SocialStackVertical = () => {
    return (
      <div class="social-container">
        <a
          href="https://www.instagram.com/gmumensclubvolleyball/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            src="./src/assets/instagram-icon.png"
            alt="Instagram"
            style={{
              marginTop: "1rem", // Equivalent to mt-4
              width: "2rem", // Equivalent to w-8
              position: "absolute",
              left: "1.6rem", // Equivalent to left-7
              bottom: "390px",
            }}
          />
        </a>
        <a
          href="https://www.gofundme.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            src="./src/assets/gofundme-icon.png"
            alt="GoFundMe"
            style={{
              marginTop: "1rem", // Equivalent to mt-4
              width: "2.5rem", // Equivalent to w-8
              position: "absolute",
              left: "1.4rem", // Equivalent to left-7
              bottom: "460px",
            }}
          />
        </a>
        <a
          href="https://mason360.gmu.edu/mensvolleyball/home/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            src="./src/assets/MasonM_icon.png"
            alt="Mason360"
            style={{
              marginTop: "1rem", // Equivalent to mt-4
              width: "2.5rem", // Equivalent to w-8
              position: "absolute",
              left: "1.8rem", // Equivalent to left-7
              bottom: "530px",
            }}
          />
        </a>
      </div>
    );
  };

  const SocialStackHorizontal = () => {
    return <div>hey</div>;
  };
  return (
    <div>
      {methodType === "method1" ? SocialStackVertical() : null}
      {methodType === "method2" ? SocialStackHorizontal() : null}
    </div>
  );
}

export default SocialStack;
