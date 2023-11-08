import React, { useEffect } from 'react';
import "./App.css";

const ContactUs = () => {
  useEffect(() => {
    // Add AOS initialization or use any other animation library you prefer
  }, []);

  return (
    <div id="contact" className="contact contact-container">
      <div className="form" data-aos="fade-up">
        <h2>Feel free to ask something</h2>
        <div className="submit">
          <input type="text" name="name" placeholder="Name" />
          <input type="number" name="contactNumber" placeholder="Contact Number" />
          <textarea name="message" placeholder="Message"></textarea>
          <a href="#">Send Message</a>
        </div>
      </div>

      <div className="map" data-aos="fade-up">
        <h2>Find Your Way Here!</h2>
        <p>
          <i className="fa-solid fa-location-dot"></i> Address: Dno: Area: Place: location:
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.2863135768907!2d83.19780228885496!3d17.683929700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a396975870163fb%3A0xda56324d6b655bd7!2sFrenchy&#39;s%20Fried%20Chicken!5e0!3m2!1sen!2sin!4v1699246702650!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          width="2500"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
