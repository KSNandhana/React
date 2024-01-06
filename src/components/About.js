import React from 'react';
import './About.css'
const About = () => {
  return (
    <div className="about-us-container">
      <fieldset>
      <h2>About Us</h2>
      <p>
        
Welcome to MEDSCORNER! We're here to redefine your experience by offering a wide variety of quality medicines , unbeatable convenience, and great savings. Our mission is to make online medical shopping easier, more enjoyable, and affordable for everyone. Shop anytime, anywhere with our app and enjoy competitive prices, exclusive deals, and fresh, high-quality items delivered to your doorstep. Your satisfaction is our priority, and we're committed to providing you with the best experience. Thank you for choosing MEDSCORNER. Happy && healthy!
      </p>

      <h3>Our Vision</h3>
      <p>
      Your satisfaction is our priority. If there's anything we can do to make your experience better, please let us know. Our friendly customer support team is ready to assist you with any inquiries or concerns.
      </p>

      <h3>Meet the Team</h3>
      <div className="team-members">
        <div className="team-member">
          {/* <img
            src="team_member1.jpg"
            alt="Team Member 1"
            className="team-member-image"
          /> */}
          <p>Team Member</p>
          <p>John Doe</p>
          <p>Co-Founder</p>
        </div>
        <div className="team-member">
          {/* <img
            src="team_member2.jpg"
            alt="Team Member 2"
            className="team-member-image"
          /> */}
          <p>Team Member </p>
          <p>Jane Smith</p>
          <p>Lead Developer</p>
        </div>
       
      </div>
      </fieldset>
    </div>
  );
};

export default About;