import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,url,news,author,date}=this.props
    return (
      <div className='my-3'>
        <div className="card" >
  <img src={url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={news} target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
