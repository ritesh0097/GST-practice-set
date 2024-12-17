import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import Register2 from './components/screens/Register2';
import Main from './components/screens/Main';


function App() {
  return (
    <div className="bg-slate-100 App">          
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/gst' element={<Home/>}/>
          <Route path='/services' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register/new-registration' element={<Register/>}/>
          <Route path='/register/temporary-reference-number' element={<Register2/>}/>
        </Routes>    
      </BrowserRouter>

    </div>
  );
}

export default App;
