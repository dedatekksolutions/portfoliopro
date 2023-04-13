import Typical from "react-typical";
import React from "react";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/mottacoke">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.google.com/">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/salamanadego/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://www.twitter.com/">
              <i className="fa fa-twitter"></i>
            </a>
            <div className="profile-details-name">
              <span className="primary-text">
                {""}
                Hello, I'm{" "}
                <span className="highlighted-text">Boozie T Badarse</span>
              </span>
            </div>
            <div className="profile-details-role">
              <div className="primary-text">
                <span>
                  {""}
                  <h1>
                    {""}
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Enthusiastic Dev 😀",
                        1000,
                        "Full Stack Dev ☺️ ",
                        1000,
                        "MERN Stack Dev 🫥",
                        1000,
                        "Cross Platform v 🤩",
                        1000,
                        "React/React Native Dev 🤩",
                        1000,
                      ]}
                    />
                  </h1>
                  <span className="profile-role-tagline">
                    Knack of building applications with front and back end
                    operations.
                  </span>
                </span>
              </div>
              <div className="profile-options">
                <button className="btn primary-btn">
                  {""}
                  Hire Me{" "}
                </button>
                <a href="ehizcv.pdf" download="Ehiedu ehizcv.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
