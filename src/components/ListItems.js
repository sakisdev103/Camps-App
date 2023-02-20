import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListItems = ({search}) => {
    //Get item from local storage

    const [campItems, setCampItems] = useState([]);
    useEffect(()=>{
        const campItems = JSON.parse(localStorage.getItem('camp'));
        if(campItems){
            setCampItems(campItems);
        }
    }, []);

    //Filter Data for search bar
    const filteredData = campItems.filter((data)=>{
        if(search === ''){
            return data;
        }else{
            return data.name.toLowerCase().includes(search);
        }
    });
  return (
    <>
        {
            filteredData.map((camp)=>{
                return(
                    <article className="camp-item" key={camp.id}>
                        <h5>{camp.name}</h5>
                        <p>{camp.description}</p>
                        <div className="view-camp">
                            <Link to={`/Campgrounds-App/view/${camp.id}`}>View Campground</Link>
                        </div>
                    </article>
                )
            })
        }
    </>
  )
}

export default ListItems