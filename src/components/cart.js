import React from 'react';
import './cart.css';
import {Link} from 'react-router-dom';

const Card = () => {
 
  const groceryItems = [
    { id: 1, name: 'Medicines', rate: 99, image: 'https://images.pexels.com/photos/7615574/pexels-photo-7615574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408' },
    { id: 2, name: 'WomenCare', rate: 1999, image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'General Medications', rate: 199, image: 'https://images.pexels.com/photos/7615574/pexels-photo-7615574.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Skin products', rate: 2000, image: 'https://images.pexels.com/photos/286951/pexels-photo-286951.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 5, name: 'Ayurvedic', rate: 3999, image: 'https://images.pexels.com/photos/7526062/pexels-photo-7526062.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 6, name: 'Hair care', rate: 2279,image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRA-awkTADe7kRmhn2vrc1xTIzmfBt0segU7gYoxBLUy-_JnKdA'},
    { id: 7, name: 'Diabetes', rate: 999,image: 'https://images.pexels.com/photos/6941879/pexels-photo-6941879.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 8, name: 'Vitamins', rate: 1999, image:  'https://images.pexels.com/photos/4046945/pexels-photo-4046945.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 9, name: 'Lab tests', rate: 4999, image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 10, name: 'Body checkup', rate: 2999, image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 11, name: 'Bone care', rate: 1990,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TWoL8Q2JM3CT7JgJszpVv_KNlOBXTnnKTg&usqp=CAU'},
    { id: 12, name: 'Baby care', rate: 1000,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39hsmuXU84Ws6LopR3eftfR4TlQRrxti6lnYKiSojVAVHrvYW'},
  ];

  const renderGroceryCards = () => {
    return groceryItems.map((item) => (
      <div key={item.id} className="grocery-card">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Rate: Rs.{item.rate.toFixed(2)}</p>
        <button className="explore-btn"><Link to="/buy">Explore</Link></button>
      </div>
    ));
  };

  return (
    <div className="grocery-page">
      <h2>Start Purchasing</h2>
      <div className="grocery-container">{renderGroceryCards()}</div>
    </div>
  );
};

export default Card;
