import './App.css';

import { BrowserRouter , Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import SignUpPage from './SignUpPage/SignUpPage';

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/accounts/emailsignup/" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
