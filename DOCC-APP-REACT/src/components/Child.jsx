
import React from 'react';
import "./Bonesandjoints.css";

const Child = () => {
  return (
    <div>
      <div className="nav__logo">
        <i className="ri-service-line"></i>Docc<span>App</span>
      </div>
      <h1 id="head">Choose your Specialist</h1>

      <div className="choose">
        <img
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoncFEDS-YROCwseb2JHUGEm27nda30apRUg&s"
          alt="doc 1"
        />
        <h3>Dr.Prachi</h3>
        Newborn & Child Specialist <br />
        Delhi <br /> <br />
        <button>view profile</button>
      </div>

      <div className="choose">
        <img
          src="https://www.sakraworldhospital.com/doctor-images/222-x-250-dr.6.png "
          alt="doc2"
        />
        <h3>Dr.Surender K Yachha</h3>
        MD,MBBS (paediatrics), DM(Gastroenterolpogy) <br /> <br />
        <button>view profile</button>
      </div>

      <div className="choose">
        <img
          src="https://www.smhbhopal.com/upload/doctors/1694174610.webp "
          alt="doc3"
        />
        <h3>Dr.Priya Sharma</h3>
        Paediatrician,expernt in Gastoenterology,etc.. <br /> <br />
        <button>view profile</button>
      </div>
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

export default Child;