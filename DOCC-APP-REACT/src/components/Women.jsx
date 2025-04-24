import React from 'react';
import "./Bonesandjoints.css";

const Women = () => {
  return (
    <div>
      <div className="nav__logo">
        <i className="ri-service-line"></i>Docc<span>App</span>
      </div>
      <h1 id="head">Choose your Specialist</h1>

      <div className="choose">
        <img
          src=" https://kangaroocareindia.com/static/media/dr-anusha-new.ed2f6a66a700fa280ced.JPG"
          alt=""
        />
        <h3>Dr.Anitha </h3>
        MBBS, MD, senior consultant in obstetrics & Gynaecology <br /> <br />
        <button>view profile</button>
      </div>

      <div className="choose">
        <img
          src="https://images1-fabric.practo.com/doctor/257473/dr-sharmila-s-643fb67d29651.png?i_type=t_70x70 "
          alt=""
        />
        <h3> Dr.Sharmila S</h3>
        MD-Obstetrics & Gynaecology <br />
        MBBS <br />
        <br />
        <button>view profile</button>
      </div>

      <div className="choose">
        <img
          src=" https://www.ferty9.com/sites/default/files/styles/doctor_340x380/public/2024-07/Dr%20Grishma.png?itok=dJyFm4J7"
          alt=""
        />
        <h3>Dr.P.Grishma</h3>
        MS(OBG),MBBS <br />
        FRM(Reproductive Medicine) <br /> <br />
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

export default Women;