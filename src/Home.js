import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123456"
            title="The Power of your Subconscious Mind Paperback – 1 December 2015"
            price={299}
            image="https://images-na.ssl-images-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="123457"
            title="Mi Full HD WiFi Smart Security Camera (1080p) |Up to 32 ft Night Vision | Intruder Alert | Ultra-Wide Angle Lens | Two-Way Audio"
            price={1799}
            image="https://images-na.ssl-images-amazon.com/images/I/61VFogBTa6L._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123458"
            title="Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life"
            price={2399}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="123459"
            title=" Mi Notebook 14 Intel Core i5-10210U  10th Gen Thin and Light Laptop(8GB/512GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg)"
            price={43999}
            image="https://images-na.ssl-images-amazon.com/images/I/51bGwoibbKL._SL1000_.jpg"
            rating={5}
          />
          <Product
            id="123469"
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
            price={3999}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123469"
            title="Mi TV 4X 163.9 cm (65 Inches) 4K Ultra HD Android LED TV (Black)"
            price={49999}
            image="https://images-na.ssl-images-amazon.com/images/I/71jL1oKiPTL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
