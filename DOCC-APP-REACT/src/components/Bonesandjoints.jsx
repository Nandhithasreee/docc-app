import React from 'react';
import "./Bonesandjoints.css";

const Bonesandjoints = () => {
  return (
    <div>
      <div className="nav__logo">
        <i className="ri-service-line"></i>Docc<span>App</span>
      </div>
      <h1 id="head">Choose your Specialist</h1>

      <div className="choose">
        <img
          src=" https://www.medanta.org/storage/doctors/February2024//si8NSqwDKKGvEmNQWbilQBi9rq8LOU-metaRHIuLVJhaml2LVJhbmphbi1TaW5oYS.pbmc=-.png"
          alt=""
        />
        <br />
        <h3> Dr.Rajiv Ranjan Sinha</h3>
        MBBS,MS(ORTH),FRCS <br /> M.Ch(orth)
        <br /> <br />
        <button>View profile</button>
      </div>

      <div className="choose">
        <img
          src="https://epichospital.com/wp-content/uploads/2024/06/Dr.-Abhishek-Rajpopat-1-350x350.jpg "
          alt=""
        />
        <h3> Dr.Abishek Rajpopat</h3>
        MD,DM(cardiology) <br /> FSCAI <br /> <br />
        <button>View profile</button>
      </div>

      <div className="choose">
        <img
          src=" https://epichospital.com/wp-content/uploads/2024/01/Dr.-Ankita-Desai.jpeg"
          alt=""
        />
        <h3> Dr.Ankita Desai</h3>
        Neurosurgeon <br /> <br /> <br />
        <button>View profile</button>
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

export default Bonesandjoints;