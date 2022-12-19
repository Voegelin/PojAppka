import React from 'react'
import { Link } from 'react-router-dom'
import Popper from 'popper.js'



export default function Navbar() {
  return (
    <div className='container-fluid'>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <b>PojAppka</b>
                    </Link>
                
                

                

                

                <div className="dropdown d-block  d-md-none">
                    
                <a className="btn btn-primary dropdown-toggle"  type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span className="navbar-toggler-icon"></span>
  </a>
  <ul className="dropdown-menu"aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href='/'>HOME</a></li>
    <li><a className="dropdown-item" href='/userlist'>Osoby</a></li>
    <li><a className="dropdown-item" href='/insurancelist'>Smlouvy</a></li>
    <li><a className="dropdown-item" href='/adduser'>Nová osoba</a></li>
  </ul>
</div>
<div className='container-fluid'></div>
                

                <Link className='btn btn-outline-light border-primary d-none d-md-block'
                type='button'
                
                 to={"/"}>
                    HOME
                </Link>
                
                <Link className='btn btn-outline-light border-primary d-none d-md-block' to={"/userlist"}>
                    Pojištěnci
                </Link>
                
                <Link className='btn  btn-outline-light border-primary d-none d-md-block p-2' to={"/insurancelist"}>
                    Smlouvy
                </Link>
                <Link className='btn  btn-outline-light border-primary d-none d-md-block text-nowrap p-2' to={"/adduser"}>
                    Nová osoba
                </Link>
                
                
            </div>
        </nav>
    </div>
  )
}
