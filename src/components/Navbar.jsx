


import React, { Component, useState } from 'react'
import { Link } from "react-router-dom/dist";

export default class Navbar extends Component {


  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // You can perform any additional logic here before updating the category prop.
  //   const { categoryValue } = this.state;
  //   this.props.onChangeCategory(categoryValue); // Call a function to update the category prop in the parent component.
  // };
  render() {
    
   
    function openNav() {
      document.getElementById("sideNavigation").style.width = "220px";
      // document.getElementById("main").style.marginLeft = "250px";
  }
  
    const closeNav =() =>{
      document.getElementById("sideNavigation").style.width = "";
  
    }  

 


   
    return (
      <>
        <div className="nav">

       {/* search bar */}
    
    
     <div className="form  ">
     <i className=' fa fa-search '  id='search-icon'></i>
     <input type="text" className='search rounded-pill' placeholder='Search...' />
     </div>


 {/* news name */}
<h3 className="main-heading">apna news</h3>
          
 {/* social media handles */}

 <div className="handles ">
       <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flogout%3D1689713607565" target='_blank'><i className="fa fa-twitter px-3" ></i></a>
       <a href="https://www.facebook.com/" target='_blank'><i className='fa fa-facebook px-3'></i></a>
        <a href="https://www.instagram.com/" target='_blank'><i className='fa fa-instagram px-3'></i></a>
 </div>

 {/* toggle bar */}

 <div className="fa fa-bars" id='bars' onClick={openNav} ></div>



<div className="sidebar " id='sideNavigation'>
   <div className="fa fa-times" id='close' onClick={closeNav}  ></div>

 <div className="d-flex flex-column mb-3 " id='sidebar-content'>
   <Link className="item" to="/">Home  </Link>
   <Link className="item " to="/buisness">Buisness</Link>
   <Link className="item" to="/entertainment">Entertainment  </Link>
   <Link className="item " to="/health">health</Link>
   <Link className="item" to="/science">science  </Link>
   <Link className="item " to="/sports">sports</Link>
   <Link className="item " to="/technology">technology</Link>
   


   {/* <input type="checkbox" className="l" /> */}
 {/* <div className="form-check form-switch" id='light-dark-mode'> <i className='fa fa-moon' id='dark'> </i>
  
// </div> */}




 </div>



     </div>
    </div>
      </>
    )
  }
}
