import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      
      <div className='header'>
      <nav className="section__container nav__container">
        <div className="nav__logo"> <i className="ri-service-line"></i>Docc<span>App</span></div>
        <ul className="nav__links">
          <li className="link"><Link to="/About">About us</Link></li>
          <li className="link"><Link to="/Login1">Login</Link></li>
          <li className="link"><Link to="#">More </Link> 
          <div className="dropdown">
<ul>
  <li className="link"><Link to="/Choice">Choose your Specialist</Link></li>
  <li className="link"> <Link to="#">Register as New Doctor</Link> </li>
  <li className="link"> <Link to="#">Register as New Client</Link> </li>
</ul>
          </div>
          </li>
        </ul>
      </nav>
      <div className="section__container header__container">
        <div className="header__content">
          <h1> Online Doctor Consultaion Platform</h1>
          <p>
            Docc app is a sleek, user-friendly web platform designed to simplify online doctor Consultation . 
              It combines functionality with ease of use, making it a reliable platform for patients 
               seeking online consultations with healthcare professionals <br/>
               <h2>BOOK YOUR SESSION NOW!!!</h2>
          </p>
        </div>
      </div>
    </div>


    <section class="section__container why__container" id="blog">
        <div class="why__image">
        <img src=" https://static.vecteezy.com/system/resources/previews/018/982/567/non_2x/online-doctor-consultation-via-your-smartphone-concept-png.png" alt="why choose us" />
        </div>
        <div class="why__content">
          <h2 class="section__header">Why Choose Us</h2>
          <p>
            With a steadfast commitment to your well-being, our team of highly
            trained healthcare professionals ensures that you receive nothing
            short of exceptional patient experiences.
          </p>
          <div class="why__grid">
            <span><i class="ri-hand-heart-line"></i></span>
            <div>
              <h4>Intensive Care</h4>
              <p>
                Our Intensive Care Unit is equipped with advanced technology and
                staffed by team of professionals
              </p>
            </div>
            <span><i class="ri-time-line"></i></span>
            <div>
              <h4> consultations at your convenience </h4>
              <p>
               You can schedule your consultations at your free time,without the need for travel
              </p>
            </div>
            <span><i class="ri-hospital-line"></i></span>
            <div>
              <h4> Regular Medical updates</h4>
              <p>
               with online consultations,you can access timely health reports & track your progrss over time
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h3>Docc<span>App</span></h3>
          <p>
            We are honored to be a part of your healthcare journey and committed
            to delivering compassionate, personalized, and top-notch care every
            step of the way.
          </p>
          <p> 
            Trust us with your health, and let us work together to achieve the
            best possible outcomes for you and your loved ones.
          </p>
        </div>
        <div class="footer__col">
          <h4>Contact Us</h4>
          <p>
            <i class="ri-map-pin-2-fill"></i> 123, London Bridge Street, India
          </p>
          <p><i class="ri-mail-fill"></i> support@care.com</p>
          <p><i class="ri-phone-fill"></i> (+91) 3456 789655</p>
        </div>
      </div>
      <div class="footer__bar">
        <div class="footer__bar__content">
          <p>Copyright © 2024 DOCC APP. All rights reserved.</p>
          <div class="footer__socials">
            <span><i class="ri-instagram-line"></i></span>
            <span><i class="ri-facebook-fill"></i></span>
            <span><i class="ri-heart-fill"></i></span>
            <span><i class="ri-twitter-fill"></i></span>
          </div>
        </div>
      </div>
    </footer>



    </div>
  )
}

export default Home
