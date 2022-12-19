import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../layout/Pagination';


export default function UsersList() {

  

    const [users,setUsers]=useState([]);

    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers();
    }
/*
    const [currentPage, setCurrentPage] = useState(1);
    const handlePrevClick = () => {
      props.onPrevClick();
    }
    const handleNextClick = ()=>{
      props.onNextClick();
    }
    const handlePageClick = (e)=>{
      props.onPageChange(Number(e.target.id));
    }
*/
  return (
    
    
    <div className='container-fluid'>

      <div className='label mt-4'><h3>Kompletní seznam pojištěnců</h3></div>
      
        <div><Link className='btn btn-info btn-outline-primary mt-4' to="/adduser">
                    <div className='text text-light'>Nová osoba</div>
                </Link>

                </div>

                


        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Jméno</th>
      <th scope="col">Příjmení</th>
      <th scope="col">Email</th>
      <th scope="col">Telefon</th>
      <th scope="col">Ulice</th>
      <th scope="col">Město</th>
      <th scope="col">PSČ</th>
      <th scope="col">Správa</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
            <th scope="row" key={user.id}>
              
            <Link className='text text-primary ' to={`/viewuser/${user.id}`}>{user.id}</Link></th>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.tel}</td>
            <td>{user.street}</td>
            <td>{user.city}</td>
            <td>{user.zip}</td>
            <td>
                <Link className='btn btn-primary btn-outline-light border-primary mx-2 d-none d-md-block w-100' to={`/viewuser/${user.id}`}>Náhled</Link>
                <Link className='btn btn-outline-primary mx-2 d-none d-md-block w-100' to={`/edituser/${user.id}`}>Editace</Link>
                <button className='btn btn-danger btn-outline-dark mx-2 d-none d-md-block w-100' onClick={()=>deleteUser(user.id)}>
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
