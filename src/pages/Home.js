import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {






  return (




    <div className='container-fluid m-5'>
        <Link className='btn btn-lg btn-block btn-info btn-outline-dark mx-2' to={"/userlist"}>
            <div className='text'>OSOBY</div>

        </Link>

        <Link className='btn btn-lg btn-block btn-warning btn-outline-dark mx-2' to={'/insurancelist'}>
        <div className='text'>SMLOUVY</div>

        </Link>









    </div>




  )
}
