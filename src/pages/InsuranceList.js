import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

export default function InsuranceList() {
  
    const [insurances,setInsurances]=useState([]);

    const {id}=useParams()

    useEffect(()=>{
        loadInsurances();
    },[]);

    const loadInsurances=async()=>{
        const result=await axios.get("http://localhost:8080/insurances");
        setInsurances(result.data);
    }

    const deleteInsurance=async (id)=>{
        await axios.delete(`http://localhost:8080/insurance/${id}`)
        loadInsurances();
    }
  
  
    return (
    
        <div className='container-fluid'>

            <div className='label mt-4'><h3>Kompletní seznam pojištění</h3></div>
      
        


        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Druh</th>
      <th scope="col">Předmět</th>
      <th scope="col">Částka</th>
      <th scope="col">Počátek</th>
      <th scope="col">Konec</th>
      <th scope="col d-none d-md-block">Správa</th>
      
    </tr>
  </thead>
  <tbody className='container-fluid'>
    {
        insurances.map((insurance,index)=>(
            <tr>
            <th scope="row" key={insurance.id}>
           <Link className='text text-primary ' to={`/viewinsurance/${insurance.id}`}>
                {insurance.id}
                </Link> 
                </th>
            <td>{insurance.type}</td>
            <td>{insurance.forWhat}</td>
            <td>{insurance.amount}</td>
            <td>{insurance.dayOfStart}</td>
            <td>{insurance.dayOfEnd}</td>
            
            <td>
            <Link className='btn btn-primary btn-outline-light border-primary mx-2 d-none d-md-block w-100' to={`/viewinsurance/${insurance.id}`} >Náhled</Link>
            <Link className='btn btn-outline-primary mx-2 d-none d-md-block w-100' to={`/editinsurance/${insurance.id}`}>Editace</Link>
            <button className='btn btn-danger btn-outline-dark mx-2 d-none d-md-block w-100' onClick={()=>deleteInsurance(insurance.id)}>
                    Smazat</button>
            </td>
            </tr>
        ))
    }
    
    
  </tbody>
</table>
        </div>

        


    </div>
  )
}
