import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate()

    const [user, setUser]=useState({
        name:"",
        lastname:"",
        email:"",
        tel:"",
        street:"",
        city:"",
        zip:""
    });

    const{name,lastname,email,tel,street,city,zip}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/userlist");

    };
    


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Nový pojištěnec</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Jméno
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň jméno'
                    name='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='Lastname' className='form-label'>
                        Příjmení
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň příjmení'
                    name='lastname'
                    value={lastname}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                        Email
                    </label>
                    <input type={"email"} 
                    className="form-control" 
                    placeholder='Vyplň email'
                    name='email'
                    value={email}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='Tel' className='form-label'>
                        Telefon
                    </label>
                    <input type={"number"} 
                    className="form-control" 
                    placeholder='Vyplň telefon'
                    name='tel'
                    value={tel}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='Street' className='form-label'>
                        Adresa: ulice a čp.
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň ulici a číslo popisné'
                    name='street'
                    value={street}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='City' className='form-label'>
                        Adresa: město
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň město'
                    name='city'
                    value={city}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='Zip' className='form-label'>
                        Adresa: PSČ
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň poštovní směrovací číslo'
                    name='zip'
                    value={zip}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <button type='submit' className='btn btn-outline-primary'>
                    Uložit
                </button>
                <Link className='btn btn-outline-danger mx-2'to="/userlist">
                    Zpět
                </Link>
                </form>
            </div>
        </div>

    </div>
  )
}
