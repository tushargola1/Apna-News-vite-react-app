import React, { Component } from 'react'
import Headlines from './Headlines'
import PropTypes from 'prop-types'
import LoadingSpinner from './LoadingSpinner'

export default class HeadlineAPi extends Component {
  static defaultProps={
    category : "general"
  }
  static propTypes ={
    category : PropTypes.string
  }
    constructor() {
        super()
        this.state={
            articles:[],
            loading : false,
            page : 1
        }
    }


    async componentDidMount(){
       
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=4c51dd35a598467ea1f419ad6d0a1ff1&page=1&pageSize=16`
      this.setState ({
        loading :true
       })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles : parsedData.articles,
            totalResults :parsedData.totalResults,
            loading : false
        })
    }

    previousNews = async() =>{
      window.scrollTo({
        top: 0 ,
        behavior:'smooth',
    })
    
      console.log("hello")
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=4c51dd35a598467ea1f419ad6d0a1ff1&page=${this.state.page-1}&pageSize=16`
      this.setState ({
        loading :true
       })
      let data = await fetch(url)
      let parsedData = await data.json()
    
      this.setState({
          articles : parsedData.articles,
          page : this.state.page -1,
          loading :false
      })
    }



    NextNews = async() =>{
     
       if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
        
      }
      else{
        window.scrollTo({
          top: 0 ,
          behavior:'smooth',
      })
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=4c51dd35a598467ea1f419ad6d0a1ff1&page=${this.state.page +1}&pageSize=16`
     this.setState ({
      loading :true
     })
      let data = await fetch(url)
      let parsedData = await data.json()
     
      this.setState({
          articles : parsedData.articles,
          page : this.state.page +1,
          loading : false
      })
      }
     
      
    }


  render() {
    
    return (
      <>
    
       <div className="container my-5 " id='headlines'>
    <h2>{this.props.Heading}</h2>
                                                   {/* if loading is true then show LoadingSpinner */}
    {this.state.loading && <LoadingSpinner/>}  
 
        <div className="row ">
  {!this.state.loading &&   this.state.articles.map((element) =>{
    return <div className="col-md-4" key={element.url}>

<Headlines title={element.title?element.title.slice(0,48) : ""}  desc = {element.description?element.description.slice(0,95): ""}  ImageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author}
time = {element.publishedAt}
/>



    </div>
  

   
  })}
     </div> 
     </div>
     <div className="pagination">
  <button className="btn-nav left-btn" onClick={this.previousNews} >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="left-icon">
      <path strokeLinejoin="round"  d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </button>

  <button className="btn-nav right-btn"  onClick={this.NextNews} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults)/16 }>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="right-icon">
      <path strokeLinejoin="round"  d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </button>
</div>
      </>
    )
  }
}
