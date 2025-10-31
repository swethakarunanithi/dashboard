import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin} setIsAdmin={setIsAdmin} />
      )}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          {isAdmin && <Route path="/dashboard/*" element={<Dashboard />} />}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;




// import React, { useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import Footer from './components/Footer/Footer'
// import LoginPopup from './components/LoginPopup/LoginPopup'

// import CustomerCard from './components/Dashboard/CustomerCard'
// import CustomerList from './components/Dashboard/CustomerList'
// import Dashboard from './components/Dashboard/Dashboard'
// import Sidebar from './components/Dashboard/Sidebar'
// const App = () => {
//   const [showLogin,setShowLogin] = useState(false)
//   return (
//     <>
//     {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
//     <div className='app'>
//       <Navbar setShowLogin={setShowLogin}/>
//       <Routes >
//         <Route path='/' element={<Home/>} />
//          <Route path='/cart' element={<Cart/>} />
//           <Route path='/order' element={<PlaceOrder/>} />
      
//       </Routes>
//     </div>
//     <Footer/>
//      </>
//   )
 
// }

// export default App
