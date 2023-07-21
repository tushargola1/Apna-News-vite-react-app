import React, { Component } from 'react'

export default class Headlines extends Component {
  render() {
    let {title , desc , ImageUrl , newsUrl , author, time} = this.props
    return (
      <>
      


  <section className="articles">

      <article>
      <figure>

        <img src={!ImageUrl?"https://static.scientificamerican.com/sciam/cache/file/4F73FD83-3377-42FC-915AD56BD66159FE_source.jpg" : ImageUrl} alt="" />

        

      </figure>

      <div className="article-preview">
        <h2>{!title?"Tuberville, Austin call fails to yield breakthro..." : title}...</h2>
        <p>{!desc? "NFL teams are refusing to give running backs lucrative long-term contracts, leaving the best pl..." : desc}... </p>
        <a href={newsUrl} className="read-more" target='_blank'>Read more</a>

        <div className="blockquote-footer my-1">{!author ? "Tom Westbrook" : author}<cite title="Source Title"> <br />{time}</cite></div>
      </div>
      

      </article>










  </section>


      </>
    )
  }
}
