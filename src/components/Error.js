import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error-page'>
        <h3>The page that are you looking for does not exist</h3>
        <div className="home-btn-container">
            <Link to='/Camps-App' className='home-btn'>Back to Home </Link>
        </div>
    </div>
  )
}

export default Error