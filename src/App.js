import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Qna from './components/screens/Qna';
import Login from './components/screens/Login';
import Register from './components/screens/TRN screens/Register';
import Register2 from './components/screens/Registration screens/Register2';
import Home from './components/screens/Home';
import Otp from './components/screens/TRN screens/Otp';
import MsgPage from './components/screens/TRN screens/MsgPage';
import Otp2 from './components/screens/Registration screens/Otp2';
import Dashboard from './components/screens/Registration screens/Dashboard';
import Step1 from './components/screens/Filling business details/Step1';


function App() {
  return (
    <div className="bg-slate-100 App">          
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gst' element={<Qna/>}/>
          <Route path='/services' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register/new-registration' element={<Register/>}/>
          <Route path='/register/new-registration/verification-otp' element={<Otp/>}/>
          <Route path='/register/new-registration/verification-otp/msg-page' element={<MsgPage/>}/>
          <Route path='/register/temporary-reference-number' element={<Register2/>}/>
          <Route path='/register/temporary-reference-number/otp' element={<Otp2/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/step1' element={<Step1/>}/>

        </Routes>    
      </BrowserRouter>

    </div>
  );
}

export default App;
