import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function ViewUser() {

    const [user, setUser]=useState({
        id:"",
        name:"",
        lastname:"",
        email:"",
        tel:"",
        street:"",
        city:"",
        zip:""
    });

    const [insurances,setInsurances]=useState([]);

    const [insurance, setInsurance]=useState({
        id:"",
        type:"",
        
        amount:""
        
    });

    const {id}=useParams();

    useEffect(()=>{
        loadUser()
        loadInsurances()

    }, []);

    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    const loadInsurances=async()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}/insurances`);
        setInsurances(result.data);
    }
    const deleteInsurance=async (id)=>{
        await axios.delete(`http://localhost:8080/insurance/${id}`)
        loadInsurances();
    }

    let navigate=useNavigate()

    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUser();
    }


    /*const loadInsurance=async ()=>{
        const result=await axios.get(`http://localhost:8080/insurance/${id}`)
        setInsurance(result.data)
    }
    */


  return (
    <div className='container-fluid'>
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>{user.name} {user.lastname}</h2>

                <div className='card'>
                    <div className='card-header'>
                        Údaje o pojištěnci id : {id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item text-start'>
                                <b className='text m-1'>Ulice: </b>
                                {user.street}
                            </li>
                            <li className='list-group-item text-start'>
                                <b className='text m-1'>Město: </b>
                                {user.city}
                            </li>
                            <li className='list-group-item text-start'>
                                <b className='text m-1'>PSČ: </b>
                                {user.zip}
                            </li>
                            <li className='list-group-item text-start'>
                                <b className='text m-1'>Email: </b>
                                {user.email}
                            </li>
                            <li className='list-group-item text-start'>
                                <b className='text m-1'>Telefon: </b>
                                {user.tel}
                            </li>
                        </ul>
                    </div>
                </div>
                <tbody >
                    <tr>
                        <td>
                <Link className='btn btn-outline-primary m-2' to={`/edituser/${id}`}>Editace osoby</Link>
                <Link className='btn btn-danger btn-outline-dark m-2' onClick={()=>deleteUser(user.id)} to={`/`}>Smazat osobu</Link>
                <Link className='btn btn-outline-danger m-2' onClick={()=>navigate(-1)}>Zpět</Link>
                </td>
                </tr>
                </tbody>
            </div>
        </div>
        </div>

        <div className='container-fluid'>
            <div className='grid'>
                
        <div className='label mt-5'><h4>Seznam pojištění</h4>
        
        <Link className='btn btn-info btn-outline-primary text-light mt-4' to={`/addinsurance/${id}`}>Nové pojištění</Link> </div>
        
        </div>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Druh</th>
      
      <th scope="col">Částka</th>
      
      
      <th scope="col">Správa pojištění</th>
    </tr>
  </thead>
  <tbody>
    {
        insurances.map((insurance,index)=>(
            <tr>
            <th scope="row" key={insurance.id}>{insurance.id}</th>
            <td>{insurance.type}</td>
            <td>{insurance.amount}</td>
                       
            <td>
                <Link className='btn btn-primary btn-outline-light border-primary mx-2 ' to={`/viewinsurance/${insurance.id}`} >Náhled</Link>
                <Link className='btn btn-outline-primary mx-2 ' to={`/editinsurance/${insurance.id}`}>Editace</Link>
                <button className='btn btn-danger btn-outline-dark mx-2 ' onClick={()=>deleteInsurance(insurance.id)}>
                    Smazat</button>
            </td>
            </tr>
        ))
    }
    
    
  </tbody>
</table>
        </div>



        </div>
        
    </div>
  );
}
