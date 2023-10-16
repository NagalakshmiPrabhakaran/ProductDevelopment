import './App.css';
import { BrowserRouter,Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from './Sidebar';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import About from './About';
import Payment from './Payment';
import Dashboard from './Dashboard';
import Analysis from './Analysis'
import Admin from './Admin'
import Help from './Help'


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/sidebar' element={<Sidebar/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/analysis' element={<Analysis/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path = '/help' element={<Help/>}/>

    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;