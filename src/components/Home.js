import React from "react";
import "./Home.css";
import Product from "../Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_2x._CB667161802_.jpg"
          className="home__containerImg"
        ></img>
        {/* The goal is to make these 
            products completely responsive.
            The rows can have different amounts
            of products present. */}
        <div className="home__row">
          <Product
            title="Nintendo Switch"
            image="https://i1.wp.com/gloelectronicstore.com/wp-content/uploads/2021/07/image03.jpg?fit=573%2C382&ssl=1"
            price={299.99}
            rating={3}
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
