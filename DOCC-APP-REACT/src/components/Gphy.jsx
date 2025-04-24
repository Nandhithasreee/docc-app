import React from 'react';
import "./Bonesandjoints.css";

const Gphy = () => {
  return (
    <div>
      <div className="nav__logo">
        <i className="ri-service-line"></i>Docc<span>App</span>
      </div>
      <h1 id="head">Choose your Specialist</h1>

      <div className="choose">
        <img
          src=" https://cdn.askapollo.com/live/images/doctors/general-medicine/dr-anusuya-shetty-general-medicine-in-bangalore.png"
          alt=""
        />
        <h3>Dr.Anusuya Shetty</h3>
        MBBS,DNB(MED), CCGDM, CCDM(PHFI), CCMTD <br /> <br />
        <button>view profile</button>
      </div>

      <div className="choose">
        <img
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewX0RFU9XR8nobdn3o_aekOmpCI76nBB8Wg&s"
          alt=""
        />
        <h3>Dr.Vishwanath B.L</h3>
        Bachelor of Medicine, Bachelor of surgery, MD <br /> <br />
        <button>view profile</button>
      </div>

      <div className="choose">
        <img
          src=" https://cms.prshospital.com/assets/uploads/c13bd96c380cff2466dc63e2cb2a756b.jpg"
          alt=""
        />
        <h3>Dr.Sukesh R S</h3>
        MBBS <br />
        MD(General Medicine ) <br />
        <br />
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

export default Gphy;