// import React from 'react'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <div>
//           <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <ul class="navbar-nav mr-auto">
//       {/* <li class="nav-item active">
//         <Link class="nav-link" to="/"> <span class="sr-only">(current)</span></Link>
//       </li> */}
//       <li class="nav-item active">
//         <Link class="nav-link" to="/buyusedcar">Buy Used Car <span class="sr-only">(current)</span></Link>
//       </li>
//       <li class="nav-item">
//         <Link class="nav-link" to="/sellcar">Sell Car</Link>
//       </li>
//       <li class="nav-item">
//               <Link class="nav-link" to="/newcar">New car  </Link>
//               </li>
//       <li class="nav-item">
//               <Link class="nav-link" to="/carfinance">Car Finance </Link>
//       </li>
//       <li class="nav-item">
//               <Link class="nav-link" to="/carservices">Car Services</Link>
//       </li>
//       {/* <li class="nav-item">
//               <Link class="nav-link" to="/formdemo4">
//               formdemo4
//               </Link>
//       </li>
//       <li class="nav-item">
//               <Link class="nav-link" to="/formdemo5">
//               formdemo5
//               </Link>
//       </li> */}
// </ul>
// </nav>

//     </div>
//   )
// }
// export default Navbar
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Car Scout<img src="src/assets/cars24_web_super.png" alt="Logo" height={"30px"} /></a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
  </button>
  <ul class="navbar-nav mr-auto">
     <li class="nav-item active">
         <Link class="nav-link" to="/"><span class="sr-only">(current)</span></Link>
      </li>
       <li class="nav-item ">
         <Link class="nav-link" to="/usedcars">Buy Used Car <span class="sr-only">(current)</span></Link>
      </li>
       <li class="nav-item ">
         <Link class="nav-link" to="/sellcar">Sell Car</Link>
       </li>
      <li class="nav-item">
               <Link class="nav-link" to="/newcar">New car  </Link>
               </li>
       <li class="nav-item">
              <Link class="nav-link" to="/carfinance">Car Finance </Link>
     </li>
     <li class="nav-item">
              <Link class="nav-link" to="/carservices">Car Services</Link>
      </li>
      {/* <li class="nav-item">
//               <Link class="nav-link" to="/formdemo4">
//               formdemo4
//               </Link>
//       </li>
//       <li class="nav-item">
//               <Link class="nav-link" to="/formdemo5">
//               formdemo5
//               </Link>
//       </li> */}
 </ul>
 <button style={{color:"blue", padding:"5px"}} onClick={()=>setShowLogin(true)}>Login/Signup</button>
 </nav>

    </div>
  )
}

export default Navbar