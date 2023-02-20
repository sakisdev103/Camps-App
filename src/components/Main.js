import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.svg';
import Hero from '../Assets/Hero Image.jpg';
import CheckMark from '../Assets/Checkmark.svg';
import Airbnb from '../Assets/Airbnb.svg';
import Booking from '../Assets/Booking.svg';
import Plum from '../Assets/Plum Guide.svg';

const Main = () => {
  return (
    <>
        <header className="landing-page-header">
            <img src={Logo} alt=""/>
        </header>
        <section>
            <div className="landing-page-img">
                <img src={Hero} alt="icon"/>
            </div>
            <div className="landing-page">
                <main className="landing-page-main">
                    <h1>Explore the best camps on Earth</h1>
                    <p>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                    <div className="landing-page-content">
                        <img src={CheckMark} alt="" /><p> Add your own camp suggestions. </p>
                        <img src={CheckMark} alt="" /><p> Leave your reviews and experiences. </p>
                        <img src={CheckMark} alt="" /><p> See locations for all camps. </p>
                    </div>
                    <Link to="/Camps-App/camplist" className="view-camps">View Campgrounds</Link>
                </main>
                <footer className="landing-page-footer">
                    <p>Partered with:</p>
                    <div className="landing-page-footer-images">
                        <img src={Airbnb} alt=""/>
                        <img src={Booking} alt=""/>
                        <img src={Plum} alt=""/>
                    </div>           
                </footer>
            </div>
        </section>
    </>
  )
}

export default Main