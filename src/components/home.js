import React, { useState, useEffect } from 'react';
import supermarketImage from '../assets/pexels-nataliya-vaitkevich-7615621.jpg'; 
import anotherImage from '../assets/pexels-puwadon-sangngern-5340280.jpg'; 
import extraImage1 from '../assets/pexels-karolina-grabowska-4386466.jpg';
import extraImage2 from '../assets/pexels-nataliya-vaitkevich-7615463 (1).jpg';
import extraImage3 from '../assets/pexels-karolina-grabowska-4226764.jpg';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const images = [supermarketImage, anotherImage, extraImage1, extraImage2, extraImage3]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);

  }, [images.length]);

  return (
    <div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <div className="explore-btn"><Link to="/cart">Explore More............</Link></div>
    </div>
  );
};

export default Home;
