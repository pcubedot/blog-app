import './App.css';
import Navbar from './components/nav/Navbar';
import SignUp from './components/login-signup/SignUp';
import Login from './components/login-signup/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  const menuName = { home: "Home", about:"About",trending: "Trending", loggrdInUser: null};
  return (
    <Router>
    <div className="App">
      <Navbar data={menuName} />
      {/* <SignUp />
      <Login /> */}
    </div>

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    
    </Router>
  );
}

export default App;

//Props are used to pass data from a parent component to a child component. 
//Props use for Unidirectional data flow parent component to a child component. 