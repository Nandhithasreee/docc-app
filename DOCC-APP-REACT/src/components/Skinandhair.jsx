import React from 'react';
import "./Bonesandjoints.css";

const Skinandhair = () => {
  return (
    <div>
      <div className="nav__logo">
        <i className="ri-service-line"></i>Docc<span>App</span>
      </div>
      <h1 id="head">Choose your Specialist</h1>

      <div className="choose">
        <img
          src=" https://cutis.org.in/static/media/dr-warood.7b7ab418.jpg "
          alt=""
        />
        <br />
        <h3> Dr.Warod Albadri</h3>
        MBBS, MD(DVL),FPD <br /> <br />
        <button>View profile</button>
      </div>

      <div className="choose">
        <img
          src=" https://cutis.org.in/static/media/dr-nayana.2f3598aa.jpg"
          alt=""
        />
        <h3> Dr.Nayana</h3>
        MBBS,MD,FRGHS <br /> <br />
        <button>View profile</button>
      </div>

      <div className="choose">
        <img
          src=" https://cutis.org.in/static/media/Dr-Kusuma-M-R.d53d1419.jpg"
          alt=""
        />
        <br />
        <h3> Dr.Kusuma M.R</h3>
        MBBS,MD,FRGUHS <br /> <br />
        <button>View profile</button>
      </div>
      <br />
      <br />
      <div className="footer__bar">
        <div className="footer__bar__content">
          <p>Copyright © 2024 DOCC APP. All rights reserved.</p>
          <div className="footer__socials">
            <span>
              <i className="ri-instagram-line"></i>
            </span>
            <span>
              <i className="ri-facebook-fill"></i>
            </span>
            <span>
              <i className="ri-heart-fill"></i>
            </span>
            <span>
              <i className="ri-twitter-fill"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skinandhair;