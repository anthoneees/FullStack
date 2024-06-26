import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-white text-black">
        <div className="outer-container w-full">
          <div className="upper flex justify-between items-center pt-2">
            <div>
              <a href="/">
                <img
                  src="./src/assets/logo192-gold.png"
                  alt="logo"
                  className="h-12"
                />
              </a>
            </div>
          </div>
          <div className="h-0.5 mt-4 bg-slate-500"></div>
          <div className="flex py-4">
            <div className="flex-1 mr-auto">
              <p className="flex-1">2024 GMU MCVB</p>
            </div>
            <div>
              <h1 className="inter-custom text-2xl pb-4">CONTACT</h1>
              <p>For more information contact our club</p>
              <a href="mailto:masonclubvolleyball@gmail.com">
                <p className="text-blue-600 underline">masonclubvolleyball@gmail.com</p>
              </a>
            </div>
            <div className="flex flex-1 ">
              <div className="ml-auto">
                <a
                  href="https://www.instagram.com/gmumensclubvolleyball/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./src/assets/instagram-icon-black.png"
                    alt="Instagram"
                    className="social-image h-6 px-2"
                  />
                </a>
              </div>
              <div className="">
                <a
                  href="https://www.gofundme.com/f/help-the-gmu-mens-club-volleyball-team-make-it-to-nationals?lid=6cu29l31m2qr&utm_medium=email&utm_source=product&utm_campaign=p_email%2B4904-welcome-wp-v5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./src/assets/gofundme-icon-black.png"
                    alt="GoFundMe"
                    className="social-image h-6 ml-8 px-2"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://mason360.gmu.edu/mensvolleyball/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./src/assets/MasonM_icon-black.png"
                    alt="Mason360"
                    className="social-image h-6 ml-8 px-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
