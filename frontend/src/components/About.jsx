import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Amrik Sukhdev, a culinary oasis nestled in the heart of Westford, Massachusetts. With a rich heritage spanning decades, we pride ourselves on offering an unforgettable dining experience that seamlessly blends authentic Indian flavors with modern innovation. From our humble beginnings, we have passionately crafted a menu that showcases the diverse and vibrant tapestry of Indian cuisine, meticulously prepared using the finest ingredients and traditional cooking techniques. Whether you're craving the comforting warmth of classic curries, the fiery kick of spicy delicacies, or the aromatic allure of tandoori specialties, our dedicated team is committed to serving you with warmth, hospitality, and unparalleled culinary expertise. Join us at Amrik Sukhdev and embark on a gastronomic journey that celebrates the timeless traditions and bold flavors of India.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
