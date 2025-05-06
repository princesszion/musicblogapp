import React, { useEffect,useState } from 'react';
import './HomePage.css';
import aboutImage from '../assets/images/abt2.JPEG';
import aboutImage2 from '../assets/images/abt1.JPEG';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import abt3 from '../assets/images/abt3.JPEG';
import abt1 from '../assets/images/abt1.JPEG';
import belongs from '../assets/images/Belongs.jpg';


const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

 
  const slides = [abt3, abt1, belongs];

 
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
    <Header />
    <div className="homepage">
      {/* Hero Section with Background Slideshow */}
      <section
        className="hero"
        
      >
        <div className="overlay">
          <div className="hero-text animate__animated animate__fadeInDown">
            <h1>Albert Paul Moifula</h1>
            <p className="animate__animated animate__fadeInUp animate__delay-1s">
              Gospel Minister • Leader • Innovator • Speaker
            </p>
            <Link to="/blogs" className="cta-button animate__animated animate__fadeInUp animate__delay-2s">
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* Ministry Section */}
      <section className="about" data-aos="fade-up">
        <div className="about-content">
          <img src={aboutImage2} alt="Albert Ministering" />
          <div className="text">
            <h2>About Albert</h2>
            <p>
            Albert Paul Moifula — born and raised in Sierra Leone — is a passionate Gospel Minister, Founder, Author, Speaker, Leader, Multi-Instrumentalist, and Executive Producer. He leverages his diverse giftings for global Kingdom impact through teaching, coaching, preaching, and transformational leadership.
            As a phenomenal minister of the Gospel of Jesus Christ, Albert (also known as Moi Albert) has performed and ministered at major conferences and large-scale gatherings, with original song compositions focusing on themes such as End-Time Kingdom Revival, Faith, Spiritual Enlightenment, and Youth Development.

            </p>
          </div>
        </div>
        <div className="about-content">
          <div className="text">
            <p>
            Albert is an alumnus of the African Leadership University Rwanda, where he earned a BA(Hons) in Global Challenges. His focus was on governance, and his academic-driven mission was to democratize creative professional development through innovative digital process models and monetization strategies.
             </p>
             <p>
             As a proud member of ACABA by CLC Kenya and an incoming alumnus of the African College of Theology Rwanda (ACT), Albert is also a dedicated social innovator. He is the founder of Totonga Arts Afrika, a digital, tech-driven platform based in Kigali, Rwanda, that is committed to equipping emerging African creatives with 21st-century skills to thrive in a rapidly evolving digital landscape.
             </p>
             <p>
             Through this initiative, Albert seeks to empower Africa’s creative minds and bridge the gap between innovation and opportunity across the continent while using his skills and giftings to spread the Gospel of Jesus Christ and live out his God-given Mandate.

             </p>
          </div>
          <img src={aboutImage} alt="Albert Ministering" />
        </div>
      </section>

      {/* Leadership & Innovation Section */}
      <section className="features" data-aos="fade-up">
        <h2>Faith Meets Innovation</h2>
        <div className="feature-grid">
          <div className="feature-item" data-aos="zoom-in">
            <h3>Academic Excellence</h3>
            <p>Graduate of African Leadership University, BA (Hons) in Global Challenges, focused on governance and innovation.</p>
          </div>
          <div className="feature-item" data-aos="zoom-in">
            <h3>Totonga Arts Afrika</h3>
            <p>A platform equipping young African creatives with 21st-century skills to lead Africa’s creative economy forward.</p>
          </div>
          <div className="feature-item" data-aos="zoom-in">
            <h3>Spirit-Led Leadership</h3>
            <p>Through ACABA and ACT, Albert continues his mission to raise, mentor, and mobilize for the Kingdom.</p>
          </div>
        </div>
      </section>

     {/* CTA */}
     <section className="call-to-action" data-aos="fade-up">
        <h2>Book Albert for Your Event</h2>
        <p>Invite Albert to speak, minister, or lead a workshop at your next conference, church service, or special gathering.</p>
        <Link to="/events" className="cta-button">
          Book Now
        </Link>

      </section>
    </div>
    </>

  );
};

export default HomePage;