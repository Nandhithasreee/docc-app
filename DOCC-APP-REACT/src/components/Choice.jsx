import React from 'react';
import "./Choice.css";
import {Link} from 'react-router-dom';

const Choice = () => {
  return (
    <div> 
      <header>
        <div className="nav__logo">
          <i className="ri-service-line"></i>Docc<span>App</span>
        </div>
      </header>
      <div id="text">
        <h1>Find a Doctor for your Health Problem</h1>
        <h2>
          Select your specific health concern to connect with a specialist who can
          provide expert care tailored to your need. <br />
          Our platform offers access to experienced professionals across various
          medical fields, ensuring you receive the right guidance and treatment
          for your particular health issue.
        </h2>
      </div>
      <div id="box">
        <div className="choose">
           
          <Link to="/Dental"> 
            <img
              src="https://www.westgreenfamilydental.com/wp-content/uploads/2022/11/Dental-Care.jpg"
              alt="dental"
            />
           </Link>

          <h2>Dental care</h2>
        </div>
        <div className="choose">
      
          <Link to="/Gphy">
            <img
              src="https://medintu.in/wp-content/uploads/2023/10/Untitled-design-1.jpg"
              alt="General Physician"
            />
            </Link>

          <h2>General Physician</h2>
        </div>
        <div className="choose">
         
          <Link to="/Child"> 
            <img
              src="https://avitahealth.in/wp-content/uploads/2023/06/Pediatrician.png"
              alt="child"
            />
            </Link>

          <h2>Child Specialist</h2>
        </div>
        <br />
        <div className="choose">
        
          <Link to="/Skinandhair"> 
            <img
              src="https://www.drdivyasharma.com/assets/blog/c24050c1e7630113f59846bd52138763.png"
              alt="Skin & Hair care"
            />
            </Link>

          <h2>Skin & Hair care</h2>
        </div>
        <div className="choose">
          
          <Link to="/Women"> 
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9A7Zido20kNrln54_x_Qg2Bf-8bM0nSanQ&s"
              alt="Women's Health"
            />
            </Link>

          <h2>Women's Health</h2>
        </div>
        <div className="choose">
         
          <Link to="/Bonesandjoints"> 
            <img
              src="https://www.beamshospital.in/wp-content/uploads/elementor/thumbs/Orthopedics-pr4ff39zp1a6mbqq5h1wmup11q16pbq9mkng2ggq2o.png"
              alt="BONES AND joints"
            />
            </Link>

          <h2>Bones & Joints</h2>
        </div>
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

export default Choice;