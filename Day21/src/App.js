import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import About from './About';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import Analysis from './Analysis'
import Admin from './Admin'
import Help from './Help'
import Payment1 from './Payment1';

import Project from './Project';
import Home from './Home';
import Home1 from './Home1';
import Terms$Conditions from './Terms$Conditions'
import Thank from './Thank';
import PrivacyPolicy from './PrivacyPolicy'
import FAQ from './FAQ';
import Crud from './Crud';
import AddCustomer from './Add';
import Front from './Front';
import AdminSignUp from './AdminSignup';
import AdminLogin from './AdminLogin';


 
function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path = '/home' element={<Home/>}/>
    <Route path = '/home1' element={<Home1/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/adminlogin' element={<AdminLogin/>}/>
    <Route path='/adminsignup' element={<AdminSignUp/>}/>
   
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/sidebar' element={<Sidebar/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/payment1' element={<Payment1/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/dashboard2' element={<Dashboard2/>}/>
    <Route path='/analysis' element={<Analysis/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path = '/help' element={<Help/>}/>
    <Route path = '/project' element={<Project/>}/>
    <Route path = '/terms$Conditions' element={<Terms$Conditions/>}/>
    <Route path = '/privacyPolicy' element={<PrivacyPolicy/>}/>
    <Route path = '/thank' element={<Thank/>}/>
    <Route path = '/faq' element={<FAQ/>}/>
    <Route path = '/crud' element={<Crud/>}/>
    <Route path = '/add' element={<AddCustomer/>}/>
    <Route path = '/' element={<Front/>}/>
    <Route path = '/img' element={<Front/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;