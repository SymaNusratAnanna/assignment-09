import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';

 import { Route, Routes } from 'react-router-dom';
 import Dashboard from './Components/Dashboard/Dashboard'
 import Reviews from './Components/Reviews/Reviews'
 import Home from './Components/Home/Home.js'
 import About from './Components/About/About'
 import Notfound from './Components/Notfound/Notfound'
 import Blogs from './Components/Blogs/Blogs'
function App() {
  return (
    <div className="App">
      
      <Header></Header>
       <Routes>
        <Route path ="/" element={<Home></Home>}></Route>
        <Route path ="/home" element={<Home></Home>}></Route>
        <Route path ="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path ="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path ="/about" element={<About></About>}></Route>
        <Route path ="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path ="*" element={<Notfound></Notfound>}></Route>
        
      </Routes>  
     
    </div>
  );
}

export default App;
