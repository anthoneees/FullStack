import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-white text-black">
        <div className="outer-container w-full px-4 py-6">
          {/* Top divider (optional spacing) */}
          <div className="h-0.5 mb-4 bg-slate-500"></div>

          {/* Responsive layout */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Logo - hidden on mobile */}
            <div className="hidden md:block">
              <a href="/">
                <img src="/logo192-gold.png" alt="logo" className="h-12" />
              </a>
              <p className="mt-2">2024 GMU MCVB</p>
            </div>

            {/* Contact - always visible and centered on mobile */}
            <div className="text-center md:text-left my-4 md:my-0">
              <h1 className="inter-custom text-2xl pb-2">CONTACT</h1>
              <p>For more information contact our club</p>
              <a href="mailto:masonclubvolleyball@gmail.com">
                <p className="text-blue-600 underline">
                  masonclubvolleyball@gmail.com
                </p>
              </a>
            </div>

            {/* Socials - hidden on mobile */}
            <div className="hidden md:flex space-x-6">
              <a
                href="https://www.instagram.com/gmumensclubvolleyball/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagram-icon-black.png"
                  alt="Instagram"
                  className="social-image h-6"
                />
              </a>
              <a
                href="https://www.gofundme.com/f/help-the-gmu-mens-club-volleyball-team-make-it-to-nationals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/gofundme-icon-black.png"
                  alt="GoFundMe"
                  className="social-image h-6"
                />
              </a>
              <a
                href="https://mason360.gmu.edu/mensvolleyball/home/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/MasonM_icon-black.png"
                  alt="Mason360"
                  className="social-image h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
