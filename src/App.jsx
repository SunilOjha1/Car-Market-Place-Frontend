import axios from 'axios'
import React, { useEffect } from 'react'
import { UserSidebar } from './Components/layouts/UserSidebar'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import { UserProfile } from './Components/user/UserProfile'
import { Login } from './Components/common/Login'
import  { SignUp} from './Components/common/SignUp'

import { UserNavbar } from './Components/layouts/UserNavbar'
import { DemoForm } from './Components/user/DemoForm'

// import LandingPage from './Components/common/LandingPage'

import { Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './Components/common/LandingPage'
import CarList from './Components/admin/CarList'
import PrivateRoutes from './Components/hooks/PrivateRoutes'
// import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
// import Navbar from './Components/Navbar/Navbar'
// import Navbar from './Components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
// import { Home } from './Components/carscout/Home'
// import { BuyUsedCar } from './Components/carscout/BuyUsedCar'
// import { Sellcar } from './Components/carscout/Sellcar'
// import { NewCar } from './Components/carscout/NewCar'
// import { Carfinance } from './Components/carscout/Carfinance'
// import { CarServices } from './Components/carscout/CarServices'
// import LoginPopUp  from './Components/LoginPopUp/LoginPopUp'
// import Aboutus from './Components/Navbar/Aboutus'

function App() {
  axios.defaults.baseURL = "http://localhost:3000"

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  // const [showLogin,setShowLogin] = useState(false)
  return (
    // <div> 
    //   <body class="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded">
    //   <div class="app-wrapper">
    //     <UserSidebar></UserSidebar>
    //     <UserNavbar></UserNavbar>
    //     {/* <Navbar></Navbar> */}
    //     <Routes>
    //       <Route path="/" element ={<LandingPage/>}></Route>
    //       <Route path="/login" element ={<Login></Login>}></Route>
    //       <Route path="/signup" element ={<SignUp></SignUp>}></Route>
    //       <Route path="/user" element= {<UserSidebar></UserSidebar>}>
    //        <Route path="profile" element= {<UserProfile></UserProfile>}></Route>
    //        <Route path="form" element= {<DemoForm></DemoForm>}></Route>
    //       </Route>
    //     <Route path="/home" element ={<Navbar></Navbar>}></Route>
    //     <Route path="/" element ={<Home></Home>}></Route>
    //     <Route path="/buyusedcar" element ={<BuyUsedCar></BuyUsedCar>}></Route>
    //     <Route path="/sellcar" element ={<Sellcar></Sellcar>}></Route>
    //     <Route path="/newcar" element ={<NewCar></NewCar>}></Route>
    //     <Route path="/carfinance" element ={<Carfinance></Carfinance>}></Route>
    //     <Route path="/carservices" element ={<CarServices></CarServices>}></Route>

    //     </Routes>
    //   </div>

    //   </body>
    // </div>
    <div
      className={
        location.pathname === "/login" || location.pathname === "/signup"
          ? ""
          : "app-wrapper"
      }
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element ={<LandingPage/>}></Route>
        <Route path ="carlist" element = {<CarList/>}></Route>
        <Route path="" element={<PrivateRoutes />}>
          <Route path="/user" element={<UserSidebar />}>
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}


export default App