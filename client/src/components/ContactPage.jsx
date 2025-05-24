import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto w-4/6 pt-8 pb-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-secondary inter-custom mb-4 mt-10">
          Contact Us
        </h1>
        <div className="bg-green-600 w-2/6 h-0.5 mb-8"></div>

        <div className="text-center mb-8">
          <p className="text-xl text-secondary inter-small">
            Have any questions about the club? Reach out to us at
            <a
              href="mailto:masonclubvolleyball@gmail.com"
              className="text-green-800 font-bold"
            >
              {" "}
              @masonclubvolleyball
            </a>
            .
          </p>
          <p className="text-xl text-secondary inter-small mt-4">
            Stay up to date by following us on Instagram at
            <a
              href="https://www.instagram.com/gmumensclubvolleyball/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 font-bold"
            >
              {" "}
              @gmumensclubvolleyball
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
