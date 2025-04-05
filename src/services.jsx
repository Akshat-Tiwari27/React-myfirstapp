import React from "react";
import "./services.css"; 
import { Link } from "react-router-dom"; 


const CarbonEmissions = () => {
  const goBack = () => {
    window.history.back(); 
  };

  return (
    <>
    <div className="back-button-ui">
    <img src='https://media.giphy.com/media/elcAvTEXkG02d17sr7/giphy.gif?cid=790b7611q0d4luebgticx3jkgn0k0zjepfxlbqd1f3kzlkrk&ep=v1_gifs_search&rid=giphy.gif&ct=g' 
                alt='Loading......' id='bgstars' />
      {/* Back Button */}
      <button className="back-button" onClick={goBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="aqua" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
               <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
      </button>

      {/* Category Links */}
      <div className="category">
        <Link to="#">Electronic &#8594;</Link>
      </div>
      <div className="category Transportation">
        <Link to="#">Transportation &#8594;</Link>
      </div>
      <div className="category Food-Product">
        <Link to="#">Food Product &#8594;</Link>
      </div>
      <div className="category Home-Waste">
        <Link to="#">Home Waste &#8594;</Link>
      </div>
    </div>

  
    
    </>
  );
};

export default CarbonEmissions;