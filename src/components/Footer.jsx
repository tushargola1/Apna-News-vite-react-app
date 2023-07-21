import React, { Component } from 'react'

export default class Footer extends Component {
  
  render() {
    const top = () =>{
      window.scrollTo({
        top: 0 ,
        behavior:'smooth',
    })
  }
    return (
      <>
      
      <div className="background d-flex justify-content-evenly">
        <div className="text">
        <h1>Sign up for NewsLetter</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>
       
          <div className="mail_form">
            <input type="text" placeholder='Email address'/>
            <a href="mailto:ApanNews23@gmail.com"><button className="cssbuttons-io-button" >
  <svg height="24" width="24" viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none"></path><path  fill="currentColor"></path></svg>
  <span>Subscribe</span>
</button></a>
          </div>
      </div>
      
   




<footer className="text-center footer text-center">
  <div className="container p-4">
    
      <div className="row  text-md-start mt-5">
        
          {/* <!--Logo Start--> */}
        <div className="col-md-4 ">
          <h4 className="pb-3" id='apna'>apna news</h4>
          
      <span className="social-links">
       

<a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flogout%3D1689713607565" target='_blank'><i className="fa fa-twitter px-3" ></i></a>
        <a href="https://www.instagram.com/" target='_blank'><i className='fa fa-instagram px-3'></i></a>
        <a href="https://www.linkedin.com/in/tushar-prajapati-549368169/" target='_blank'><i className='fa fa-linkedin px-3'></i></a>
</span>
          
          
        </div>
        {/* <!--Logo end--> */}
        
         
        <div className="col-md-3" >
         <h5 className="pb-3">Company </h5>
          <ul className="list-style ps-0 ">
            <li className="pb-3">About</li>
            <li className="pb-3">Contact</li>
            <li className="pb-3">Our Staff</li>
            <li className="pb-3">Advertise</li>
            
          </ul>
        </div>
      
        <div className="col-md-3 ">
         <h5 className="pb-3"> Tech News</h5>
          <ul className="list-style ps-0">
            <li className="pb-3">Technology</li>
            <li className="pb-3">Gadget</li>
            <li className="pb-3">Software</li>
            <li className="pb-3">Games</li>
          </ul>
        </div>
       
        <div className="col-md-2 ">
         <h5 className="pb-3"> Other </h5>
          <ul className="list-style ps-0">
            <li className="pb-3">Privacy Policy</li>
            <li className="pb-3">Terms of Use</li>
            <li className="pb-3">Features</li>
            <li className="pb-3">Success Stories</li>
            <li className="pb-3">Contact Us</li>
          </ul>
        </div>
        {/* <!--Other end--> */}
      </div>
    
  </div>
  
  <p className="copy-right">  ©APNA NEWS. 2023 All Rights Reserved.</p>

  {/* scrolTop button */}

  <i className="fa fa-chevron-up" id="scrolTop" onClick={top}></i>


  
 
   
   
</footer>


      </>
    )
  }
}
