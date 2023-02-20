import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { camps } from '../data';

const AddCamp = () => {
    const [error, setError] = useState(false);
    const [displayMessage, setDisplayMessage] = useState('');
    const [inputs, setInputs] = useState({
        name: '',
        price: '',
        desc: ''
    })
    
    const handleChange = (e) =>{
        const value = e.target.value;
        setInputs({
            ...inputs,
            [e.target.name] : value
        })
    }

    //Get camps from local storage

    let storageCamps = JSON.parse(localStorage.getItem('camp'));

    //Pass them to value

    const [campItems, setCampItems] = useState(storageCamps);

    //Function to add camps

    const addCamp = (newCamps) =>{
        setCampItems([...campItems, newCamps]);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!(inputs.name || inputs.price || inputs.desc)){
            setError(true);
            setDisplayMessage('Please fill out the fields.');
        }else{
            const newCamp = {
                id: Math.floor(Math.random() * 10000),
                name: inputs.name,
                price: parseFloat(inputs.price),
                description: inputs.desc
            }
            addCamp(newCamp);
            setError(false);
            setDisplayMessage('New Campground has been added successfully.');
            setTimeout(()=> {
                setDisplayMessage('');
                setInputs({
                    name: '',
                    price: '',
                    desc: ''
                });
            },2000);
            
        }
    }
    useEffect(()=>{
        // //Because we pass items from local storage, if there are no camps then it is null. We cant pass a null value, so we set it to an empty array.
        if(campItems === null){
            setCampItems(camps);
        }
        ////Set camps in local storage
        localStorage.setItem('camp', JSON.stringify(campItems));
    }, [campItems]);

  return (
    <>
        <Navbar/>
        <div className='main'>
            <h2>Add New Campgroud</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label>Campground Name</label>
                <input type="text" className='input' name='name' onChange={handleChange} value={inputs.name}/>
                <label>Price</label>
                <input type="number" className='input' name='price' onChange={handleChange} value={inputs.price}/>
                <label>Description</label>
                <input type="text" className='input' name='desc' onChange={handleChange} value={inputs.desc}/>
                <button type="submit" className='form-submit'>Add Campground</button>
            </form>
            <h3 className={!error ? `success` : `error`}>{displayMessage}</h3>
            <div className='link-camps-container'>
                <Link to='/Camps-App/camplist'>To Campgrounds<img src="https://img.icons8.com/windows/32/null/long-arrow-right.png" alt='icon'/></Link>
            </div>
        </div>
    </>
  )
}

export default AddCamp