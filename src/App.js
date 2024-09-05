import './App.css';
import Navbar from './components/nav/Navbar';
function App() {
  const menuName = { home: "Home", about:"About",trending: "Trending", loggrdInUser: null};
  return (
    <div className="App">
      <Navbar data={menuName} />
    </div>
  );
}

export default App;

//Props are used to pass data from a parent component to a child component. 
//Props use for Unidirectional data flow parent component to a child component. 