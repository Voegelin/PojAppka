
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import UsersList from './pages/UsersList';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import InsuranceList from './pages/InsuranceList';
import AddInsurance from './Insurances/AddInsurance';
import ViewInsurance from './Insurances/ViewInsurance';
import EditInsurance from './Insurances/EditInsurance';


function App() {
  return (
    <div className="App">
      

      <Router>

      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/userlist' element={<UsersList/>}/>
        <Route exact path='/adduser' element={<AddUser/>}/>
        <Route exact path='/edituser/:id' element={<EditUser/>}/>
        <Route exact path='/viewuser/:id' element={<ViewUser/>}/>
        <Route exact path='/insurancelist' element={<InsuranceList/>}/>
        <Route exact path='/addinsurance/:id' element={<AddInsurance/>}/>
        <Route exact path='/viewinsurance/:id' element={<ViewInsurance/>}/>
        <Route exact path='/editinsurance/:id' element={<EditInsurance/>}/>
      </Routes>
      
      </Router>

      

      
    </div>
  );
}

export default App;
