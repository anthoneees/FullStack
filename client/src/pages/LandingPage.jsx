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
              <h2 className="text-8xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                George Mason's
              </h2>
              <h3 className="text-8xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Volleyball Club
              </h3>
              <h4 className="text-2xl text-customGray pt-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Empowering student athletes through volleyball, fostering
                teamwork,
              </h4>
              <h5 className="text-2xl text-customGray drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                sportsmanship, and personal growth.
              </h5>
            </div>
          </div>
          <div className="bg-white flex flex-col items-center py-24">
            <h1 className="text-4xl inter-custom text-secondary">Join Us</h1>
            <div className="img-with-text flex">
              <div className="events+open+tryouts p-8 flex flex-col items-center outline">


                <div className="ourevents flex flex-col items-center pb-10">
                  <h1 className="text-xl inter-custom">Our Events</h1>
                  <p className="w-3/4">
                    Whether you're aiming for our A team or our B team, we
                    welcome players of all skill levels. As a member of GMU
                    Men's Club Volleyball, you'll compete at both regional and
                    national levels, experiencing the thrill of high-level play
                    and the camaraderie of a dedicated team. Don't miss your
                    chance to be part of something great!
                  </p>
                </div>



                <div className="flex items-start">


                  <div className="">


                    <h1 className="inter-custom text-xl">Open Gym</h1>
                    <p className="w-3/6 pt-4 inter-small">
                      Kick off the semester with our Open Gym, held on the first
                      Thursday of each semester from 9:30-11:30pm at the Field
                      House.
                    </p>
                  </div>

                  
                  <div className="">
                    <h1 className="inter-custom text-xl">Tryouts</h1>
                    <p className="w-3/6 pt-4 inter-small">
                      Ready to take the next step? Tryouts are held on the
                      second Tuesday and Thursday of each semester, also from
                      9:30-11:30pm at the Field House.
                    </p>
                  </div>
                </div>
                <a href="/events">
                  <button className="bg-secondary text-lg rounded-2xl text-white mt-8 p-2 ml-4">
                    Register for Upcoming Events
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" inter-custom text-white bg-white">
              <div className="about-image">
                <div className="py-20">
                  <h1 className=" text-4xl ml-4 ">About Our Program</h1>
                  <div className="h-0.5 mt-4 bg-white w-1/6 ml-4 "></div>
                  <p className="py-8 text-xl w-5/6 ml-4">
                    We are a nonprofit volleyball club that fosters a
                    competitive and enriching environment for our 30 passionate
                    members. Our team competes during the fall and spring
                    semesters with two mandatory practices each week. Join us to
                    enhance your skills, compete at regional and national
                    levels, and be part of a dedicated and supportive community.
                    We look forward to welcoming you to the GMU Men's Club
                    Volleyball family!
                  </p>
                  <a href="/events">
                    <button className="bg-green-900 text-lg rounded-2xl text-white mt-8 p-2 ml-4">
                      Learn More ➞
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            {postsData && <InstagramPosts posts={postsData} />}
          </div>
          <Footer />
        </div>

        <div className="bg-white pl-1 -z-10"></div>
      </div>
    </>
  );
}

export default LandingPage;
