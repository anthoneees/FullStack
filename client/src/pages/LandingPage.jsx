// LandingPage.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/styles.css";
import "../styles/landingpage.css";
import Footer from "../components/Footer";
import InstagramPosts from "../components/InstagramPosts";
import axios from "axios";

/*
 * First page viewer sees when opening website.
 * Contains a divbar, as well as text elements acting as a welcome.
 */
function LandingPage() {
  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/insta")
      .then((response) => {
        console.log("API response:", response);
        setPostsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Instagram posts:", error);
      });
  });
  return (
    <>
      <Navbar />

      <div className="flex w-full justify-center relative ">
        <div className="bg-white pr-1 "></div>

        <div className=" w-11/12 custom-shadow">
          <div className="hero-section flex flex-col justify-center items-center">
            <div className="h-full fixed background-image"></div>
            <div className="text-content flex flex-col inter-custom text-left tracking-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <h1 className=" text-2xl text-tertiary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Welcome to Mason Men's Club Volleyball
              </h1>
              <h2 className="text-8xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">George Mason's</h2>
              <h3 className="text-8xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Volleyball Club</h3>
              <h4 className="text-2xl text-customGray pt-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Empowering student athletes through volleyball, fostering
                teamwork,
              </h4>
              <h5 className="text-2xl text-customGray drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                sportsmanship, and personal growth.
              </h5>
            </div>
          </div>

          <div className="">
            <div className=" inter-custom text-secondary py-8 bg-white">
              <h1 className="bg-white text-4xl ml-4 ">About Our Program</h1>
              <div className="h-0.5 mt-4 bg-secondary w-1/6 ml-4 "></div>
              <p className="py-8 text-xl w-5/6 ml-4 ">
                We are committed to ensuring that every GMU athlete has a
                positive experience that fuels his or her love of volleyball and
                competition. We teach our athletes the game of volleyball
                including all aspects of skills training, tactical knowledge,
                match strategies as well as teaching them to be disciplined,
                train at full effort, be a positive and supportive teammate,
                push beyond their comfort level and compete with confidence and
                enthusiasm.
              </p>
              <p className="text-xl w-5/6 ml-4 ">
                The club will also provide a structure that will facilitate the
                operation of individual teams in terms of providing practice
                facilities, equipment, and communication. We believe all these
                to be necessary in delivering a safe, competitive volleyball
                experience for the athletes.
              </p>
              <a href="/events" >
                <button className="bg-secondary text-lg rounded-2xl text-white mt-8 p-1 ml-4">
                  Ready to Play?
                </button>
              </a>
            </div>
          </div>
          <div className="bg-white">
            {postsData && <InstagramPosts posts={postsData}/>}
          </div>
          <Footer />
        </div>

        <div className="bg-white pl-1 -z-10"></div>
      </div>
    </>
  );
}

export default LandingPage;
