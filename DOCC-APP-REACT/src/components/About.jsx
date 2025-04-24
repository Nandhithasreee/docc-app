import React from "react";
import "./About.css";


const about = () => {
  return (
<> 
    <div>
      <div className="nav__logo">
        <i className="ri-service-line"></i>Docc<span>App</span>
      </div>

      <div id="img">
        <img
          src="https://vixspace.com/wp-content/uploads/2022/03/Doctor-Consultation-App-Development.png"
          alt="Doctor Consultation App"
        />
      </div>

      <div>
        <h1>KNOW ABOUT US</h1>
        <p className="info">
          Docc app is an online platform that provides convenient access to
          medical consultations with qualified doctors. Through Docc, users can
          connect with healthcare professionals from the comfort of their homes,
          eliminating the need for physical appointments. This service offers a
          time-efficient and accessible way to seek medical advice, receive
          diagnoses, and obtain prescriptions for various health concerns.
          <br />
          <br />
          Docc app boasts a user-friendly interface that makes it easy for
          individuals of all ages and tech-savviness to navigate. The platform
          offers convenient features like appointment scheduling, messaging with
          doctors, and accessing medical records, ensuring a seamless and
          accessible healthcare experience.
          <br />
          <br />
          Docc app connects users with a diverse network of healthcare
          professionals specializing in various fields, including general
          medicine, pediatrics, dermatology, cardiology, and more. This ensures
          that users can find the appropriate specialist for their specific
          health concerns, receiving tailored advice and treatment
          recommendations.
          <br />
          <br />
          we prioritizes the privacy and security of its users' personal
          information and medical data. The platform employs robust security
          measures to protect sensitive information, ensuring that users can
          trust Docc to maintain confidentiality.
          <br />
          we offers affordable consultation fees and flexible appointment
          options, making it accessible to a wide range of individuals. By
          eliminating the need for travel and waiting times in physical clinics,
          Docc provides a convenient and cost-effective solution for healthcare
          needs.
        </p>
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
    </>
  );
};

export default about;
