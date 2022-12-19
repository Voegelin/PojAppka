import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AddInsurance() {

    let navigate=useNavigate()

    const {id}=useParams()

    const [insurance, setInsurance]=useState({
        type:"",
        forWhat:"",
        amount:"",
        dayOfStart:"",
        dayOfEnd:""
    });

    const{type,forWhat,amount,dayOfStart,dayOfEnd}=insurance

    const onInputChange=(e)=>{
        setInsurance({...insurance,[e.target.name]:e.target.value})

    };

    const deleteInsurance=async ()=>{
        await axios.delete(`http://localhost:8080/insurance/${id}`);
        navigate(-1)
        
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:8080/user/${id}/insurance`,insurance)
        navigate(-1);

    };

    






  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Nové pojištění</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Type' className='form-label'>
                        Druh
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň druh pojištění'
                    name='type'
                    value={type}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='ForWhat' className='form-label'>
                        Předmět pojištění
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň předmět pojištění'
                    name='forWhat'
                    value={forWhat}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='Amount' className='form-label'>
                        Pojistná částka (Kč)
                    </label>
                    <input type={"number"} 
                    className="form-control" 
                    placeholder='Vyplň výši pojistné částky'
                    name='amount'
                    value={amount}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='dayOfStart' className='form-label'>
                        Počátek platnosti
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň od kdy je pojištění platné'
                    name='dayOfStart'
                    value={dayOfStart}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='dayOfEnd' className='form-label'>
                        Konec platnosti
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň do kdy je pojištění sjednáno'
                    name='dayOfEnd'
                    value={dayOfEnd}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                
                
                
                <button type='submit' className='btn btn-outline-primary'>
                    Uložit
                </button>
                <button className='btn btn-outline-danger mx-2'onClick={()=>deleteInsurance()}>
                    Zpět
                </button>
                </form>
            </div>
        </div>

    </div>
  )
}

