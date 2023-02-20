import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ListItems from './ListItems';

const CampList = () => {

  //Search Bar

  const [search, setSearch] = useState('');
  const searchBar = (e) =>{
    let lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  }
  return (
    <>
        <Navbar/>
        <main className="main">
            <div className="search-container">
                <h1>Welcome to YelpCamp!</h1>
                <p>View our hard-picked campgrounds from all over the world, or add your own.</p>
                <input type="search" className="search-bar" onChange={searchBar} value={search} placeholder="Search for camps"/>
                <Link to="/Campgrounds-App/add">Or add your own campground</Link>
            </div>
            <div className="mountains-container mountains-container-grid" id="show-content">
                <ListItems search={search}/>
            </div>
        </main>
        <footer className="footer">
            <img src="../Assets/Logo.svg" alt=""/>
        </footer>
    </>
  )
}

export default CampList