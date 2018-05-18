import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>(
  <div className="home">
    <h1 className="titleContainer">Pick an edition</h1>
    <div className="setsBox">
    <span><Link to="/set/RIX">IXALAN : Rivals of Ixalan</Link></span>
    <span><Link to="/set/XLN">IXALAN : IXALAN</Link></span>
    <span><Link to="/set/HOU">AMONKHET : Hour of Devastation</Link></span>
    <span><Link to="/set/AKH">AMONKHET : AMONKHET</Link></span>
    <span><Link to="/set/KLD">KALADESH</Link></span>
  </div>
  </div>
)




export default Home
