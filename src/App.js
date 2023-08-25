import './App.css';
import LoginPage from './LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" exact component={<LoginPage/>}/>
    //   </Routes>
    // </Router>
    <LoginPage />
  )
}

export default App;
