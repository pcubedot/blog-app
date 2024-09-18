import './App.css';
import Navbar from './components/nav/Navbar';
import SignUp from './components/login-signup/SignUp';
import Login from './components/login-signup/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useState} from 'react'
import Blog from './components/blog/Blog';

function App() {
  //const menuName = { home: "Home", about:"About",trending: "Trending", loggrdInUser: null};
  const [menuName, setMenuName] = useState({
    home: "Home",
    about: "About",
    trending: "Trending",
    loggedInUser: "User",
  });
  const [childData, setChildData] = useState(""); 
  const handleDataFromChild = (data1) => {
    setChildData(data1); // Update the state with data from child
    console.log(data1,'from child')
    setMenuName((prevState) => ({
      ...prevState,
      loggedInUser: data1,
    }));
    console.log(menuName,'menuName from child')
  };

  return (
    <Router>
    <div className="App">
      <Navbar data={menuName} />
      {/* <SignUp />
      <Login /> */}
    </div>

    <Routes>
      <Route path="/login" element={<Login sendDataToParent={handleDataFromChild} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/createBlog" element={<Blog />} />
    </Routes>
    
    </Router>
  );
}

export default App;

//Props are used to pass data from a parent component to a child component. 
//Props use for Unidirectional data flow parent component to a child component. 