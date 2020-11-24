import "./Home.css";

import Product from './Product';
import React from 'react';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="home__image"/>
                <div className="home__row">
                    <Product id="1606243473" title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses' price={24.99} image="https://m.media-amazon.com/images/I/51T-sMqSMiL._AC_SL260_.jpg" rating={5}/>
                    <Product id="1606243701" title='PHISINIC Stand Mixer, 6.5-QT 800W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Power Hub for Attachment (Red)' price={212.85} image="https://m.media-amazon.com/images/I/71PcRhHJaSL._AC_UL320_.jpg" rating={4}/>
                </div>
                <div className="home__row">
                    <Product id="1606244339" title='Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S & L Bands Included)' price={99.95} image="https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg" rating={4}/>
                    <Product id="1606243969" title='Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Charcoal' price={23.99} image="https://images-na.ssl-images-amazon.com/images/I/61NqDOhYukL._AC_SL1000_.jpg" rating={5}/>
                    <Product id="1606244147" title='New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)' price={999.99} image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg" rating={5}/>
                </div>
                <div className="home__row">
                    <Product id="1606243778" title='SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model' price={1189.99} image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg" rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home
