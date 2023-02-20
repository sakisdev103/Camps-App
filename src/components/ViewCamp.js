import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

const ViewCamp = () => {
    //Get id dynamic

    const {id} = useParams();

    //Make it and int (Default is a string)

    const idToInt = parseInt(id);

    //Get camps from local storage

    const storageCamps = JSON.parse(localStorage.getItem('camp'));

    //Check if id exists in our object array

    // eslint-disable-next-line
    const selectedCamp = storageCamps.filter((camp)=>{  
        if(idToInt === camp.id){
            return camp;
        }
    });

    //Get comments from local storage
    
    let comments = JSON.parse(localStorage.getItem('comment'));
  return (
    <>
      <Navbar/>  
      <div className='mountains-container'>
        <div className='camp-item'>
          {
            selectedCamp.map((item)=>{
              return(
                <article key={item.id}>
                  <div className="individual-header">
                    <h3>{item.name}</h3>
                    <p>${item.price}/night</p>
                  </div>
                  <p>{item.description}</p>
                </article>
              )
            })
          }
        </div>
      </div>
      <div className='mountains-container'>
        <div className="camp-item">
          {
            comments
            ?
            // eslint-disable-next-line
              comments.filter((comment)=>{
                if(idToInt === parseInt(comment.camp)){
                  return comment;
                }}).map((item)=>{
                return(
                  <article key={item.id} className='comment-container'>
                    <div className="individual-header">
                        <h4>User{item.user}</h4>
                        <p>{item.date}</p>
                    </div>
                    <p>{item.comment}</p>
                  </article>

                )
              })
            :null
          }
          <div className="add-comment-container">
            <Link to={`/Camps-App/comment/${id}`} className="add-comment">Leave a review</Link>
          </div>
          <div className='link-camps-container'>
                <Link to='/Camps-App/camplist'>To Campgrounds<img src="https://img.icons8.com/windows/32/null/long-arrow-right.png" alt='icon'/></Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default ViewCamp