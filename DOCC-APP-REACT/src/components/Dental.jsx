import React from 'react';
import "./Bonesandjoints.css";
const Dental = () => {
  return (
    <div>
      <div className="nav__logo">
        <i className="ri-service-line"></i>Docc<span>App</span>
      </div>
      <h1 id="head">Choose your Specialist</h1>

      <div className="choose">
        <img
          src=" https://images1-fabric.practo.com/doctor/27923/dr-t-ramakrishna-6488366264c76.png"
          alt=""
        />
        <br />
        <h3>Dr.T.Ramakrishna</h3>
        BDS,MDS-Oral & Maxillofical surgery .oral and Maxillofacial surgeon,
        Dentist,Dental surgeon. <br /> <br />
        <button>View profile</button>
      </div>

      <div className="choose">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL34pegZRPiiVld0Y5T2a7VWP8alLeKgR4Tg&s"
          alt=""
        />
        <h3> Dr. Susmita</h3>
        Completed BDS, she has done futher Orthodontic and Endodontic courses as
        well. <br /> <br />
        <button>View profile</button>
      </div>

      <div className="choose">
        <img
          src="https://media.licdn.com/dms/image/v2/C5103AQFgY9LePHPYKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1530774044725?e=2147483647&v=beta&t=RPDoq-NXPYcvlW0rX-YKGmY6bRFU4IS8bMsXlnf06tY"
          alt=""
        />
        <h3>Dr.Bhoomi Patel</h3>
        BDS,general dentisry(since 6 yrs),successfully completed more than 5000
        root canal treatments. <br /> <br />
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

export default Dental;