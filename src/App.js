import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Qna from './components/screens/Qna';
import Login from './components/screens/Login';
import Register from './components/screens/Registration screens/Register';
import Register2 from './components/screens/TRN screens/Register2';
import Home from './components/screens/Home';
import Otp from './components/screens/Registration screens/Otp';
import MsgPage from './components/screens/Registration screens/MsgPage';
import Otp2 from './components/screens/TRN screens/Otp2';
import Dashboard from './components/screens/TRN screens/Dashboard';
import Step1 from './components/screens/Filling business details/Step1';
import Step2 from './components/screens/Filling business details/Step2';
import Step4 from './components/screens/Filling business details/Step4';
import Step6 from './components/screens/Filling business details/Step6';
import Step3 from './components/screens/Filling business details/Step3';
import Step7g from './components/screens/Filling business details/Step7goods';
import Step7s from './components/screens/Filling business details/Step7service';
import Step8 from './components/screens/Filling business details/Step8';
import Step9 from './components/screens/Filling business details/Step9';
import Step10 from './components/screens/Filling business details/Step10';
import Success from './components/screens/Filling business details/Success';


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
          <Route path='/business details' element={<Step1/>}/>
          <Route path='/promoters and partner details' element={<Step2/>}/>
          <Route path='/authorized signatory' element={<Step3/>}/>
          <Route path='/authorized representative' element={<Step4/>}/>
          <Route path='/pricipal place' element={<Step6/>}/>
          <Route path='/goods and serivces/goods' element={<Step7g/>}/>
          <Route path='/goods and serivces/services' element={<Step7s/>}/>
          <Route path='/state specific information' element={<Step8/>}/>
          <Route path='/aadhar authentication' element={<Step9/>}/>
          <Route path='/verification' element={<Step10/>}/>
          <Route path='/success' element={<Success/>}/>

        </Routes>    
      </BrowserRouter>

    </div>
  );
}

export default App;
