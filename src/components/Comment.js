import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

const Comment = () => {
  //Get id dynamic

  const {id} = useParams();

  const [error, setError] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('');
  const [comment, setComment] = useState('');

  //Get comments from local storage

  let comments = JSON.parse(localStorage.getItem('comment'));

  //Pass to our array comments from local storage

  const [commentsArray, setCommentsArray] = useState(comments);

  //Function to add comments
  
  const addComment = (newComments) =>{
    setCommentsArray([...commentsArray, newComments]);
  }

  const handleChange = (e) =>{
    setComment(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(comment !== ''){
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;

        const newComments ={
            id: Math.floor(Math.random() * 10000),
            camp: id,
            comment: comment,
            date: currentDate,
            user: Math.floor(Math.random() * 100000)
        }
        addComment(newComments);
        setError(false);
        setDisplayMessage('Successfully added comment.');
        setTimeout(()=>{
            setDisplayMessage('');
            setComment('');
        },2000);
    }else{
        setError(true);
        setDisplayMessage('Please fill out the field.');
    }
  }

  useEffect(()=>{
    //Because we pass items from local storage, if there are no comments then it is null. We cant pass a null value, so we set it to an empty array.
    if(commentsArray === null){
      setCommentsArray([]);
    }
    //Set comments in local storage
    localStorage.setItem('comment', JSON.stringify(commentsArray));
  },[commentsArray]);
  return (
    <>
      <Navbar/>
      <div className='main'>
            <h2>Add New Comment</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label>Description</label>
                <input type="text" className='input' onChange={handleChange} value={comment}/>
                <button type="submit" className='form-submit'>Post Comment</button>
            </form>
            <h3 className={ !error? `success` : `error` }>{displayMessage}</h3>
            <div className='link-camps-container'>
                <Link to={`/Camps-App/view/${id}`}>To Camp<img src="https://img.icons8.com/windows/32/null/long-arrow-right.png" alt='icon'/></Link>
            </div>
        </div>  
    </>
  )
}

export default Comment