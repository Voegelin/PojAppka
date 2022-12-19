import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function EditInsurance() {
 
    let navigate=useNavigate()

    const {id}=useParams()

    const [insurance, setInsurance]=useState({
        id:"",
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

    useEffect(()=>{
        loadInsurance()
    })

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:8080/insurance/${id}`,insurance)
        navigate(-1);

    };

    let loadInsurance=async ()=>{
        const result=await axios.get(`http://localhost:8080/insurance/${id}`)
        setInsurance(result.data)
    }


 
 
 
 
    return (
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Správa údajů o pojištění</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Type' className='form-label'>
                        Druh pojištění
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň druh pojištění'
                    name='type'
                    value={type}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='forWhat' className='form-label'>
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
                    <label htmlFor='amount' className='form-label'>
                        Pojistná částka
                    </label>
                    <input type={"number"} 
                    className="form-control" 
                    placeholder='Vyplň pojistnou částku'
                    name='amount'
                    value={amount}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='dayOfStart' className='form-label'>
                        Počátek platnosti smlouvy
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň počátek platnosti smlouvy'
                    name='dayOfStart'
                    value={dayOfStart}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='dayOfEnd' className='form-label'>
                        Konec platnosti smlouvy
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder='Vyplň ulici a číslo popisné'
                    name='dayOfEnd'
                    value={dayOfEnd}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                
                
                <button type='submit' className='btn btn-outline-primary'>
                    Uložit
                </button>
                <button className='btn btn-outline-danger mx-2'onClick={()=> navigate(-1)}>
                    Zpět
                </button>
                </form>
            </div>
        </div>

    </div>
  )
}
