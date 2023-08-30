import './App.css';

import { BrowserRouter , Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import SignUpPage from './SignUpPage/SignUpPage';
import HomePage from './HomePage/HomePage';

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route path='/accounts/emailsignup/' element={<SignUpPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
