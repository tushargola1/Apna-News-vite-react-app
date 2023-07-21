import React, { Component, useState } from 'react'
import Coursnel from './components/Coursnel'
import Navbar from './components/Navbar'
import HeadlineAPi from './components/HeadlineAPi'
import Footer from './components/Footer'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'


export  class App extends Component {
  render() {

          


    return (
    
           <>

              <Router>
              <Navbar />

      <Routes>

        <Route exact path = "/"   element = {<HeadlineAPi key= "general" category ="general" Heading="Headlines"/>}  />
        <Route exact path = "/buisness"   element = {<HeadlineAPi key= "business" category ="business" Heading="Business"/>}  />
        <Route exact path = "/entertainment"   element = {<HeadlineAPi  key= "entertainment" category ="entertainment" Heading="Entertainment"/>}  />
        <Route exact path = "/health"   element = {<HeadlineAPi key= "health" category ="health" Heading="Health"/>}  />
        <Route exact path = "/science"   element = {<HeadlineAPi key= "science" category ="science" Heading="Science"/>}  />
        <Route exact path = "/sports"   element = {<HeadlineAPi key= "sports" category ="sports" Heading="Sports"/>}  />
        <Route exact path = "/technology"  element = {<HeadlineAPi key= "technology " category ="technology" Heading="Technology"/>}  />
       
  </Routes>

</Router>



<Footer/>
            
          </>

        )
      }
      
     
    
  }
  export default App

