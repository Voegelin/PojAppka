import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ViewInsurance() {


    const [insurance, setInsurance]=useState({
        type:"",
        forWhat:"",
        amount:"",
        dayOfStart:"",
        dayOfEnd:""
    });

    const{id}=useParams();

    useEffect(()=>{
        loadInsurance()
    })



    const loadInsurance=async ()=>{
        const result=await axios.get(`http://localhost:8080/insurance/${id}`)
        setInsurance(result.data)
    }

    let navigate=useNavigate();






  return (
    <div className='container-fluid'>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Údaje o pojištění </h2>
                <h6> id : {id}</h6>

                <div className='card'>
                    <div className='card-header'>
                    
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item text-start'>
                                <b>Typ pojištění: </b>
                                <span className='container ' > {insurance.type}</span>
                            </li>
                            <li className='list-group-item text-start'>
                                <b>Předmět pojištění: </b>
                                <span className='container'>{insurance.forWhat}</span>
                            </li>
                            <li className='list-group-item text-start'>
                                <b>Pojistná částka: </b>
                                <span className='container'>{insurance.amount}</span>
                            </li>
                            <li className='list-group-item text-start'>
                                <b>Počátek pojištění: </b>
                                <span className='container'>{insurance.dayOfStart}</span>
                            </li>
                            <li className='list-group-item text-start'>
                                <b>Konec pojištění: </b>
                                <span className='container'>{insurance.dayOfEnd}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className='btn btn-outline-danger mx-2' onClick={()=>navigate(-1)} >Zpět</button>
            </div>
        </div>
        </div>

        
        
    </div>
  )
}
