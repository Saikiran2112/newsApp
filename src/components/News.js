import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

 constructor(){
    super();
    this.state={
        articles:[],
        loading:false,
        page:1,
        
    }
 }
 async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&&apiKey=57d1379d3cdc478391e413b7df59554e&page=1&pageSize=${this.props.page}`
    let data=await fetch(url)
    let par=await data.json()
    this.setState({
        articles:par.articles,
        totalResults:par.totalResults
    })
 }
 handleprevious= async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&&apiKey=57d1379d3cdc478391e413b7df59554e&page=${this.state.page-1}&pageSize=${this.props.page}`
  let data=await fetch(url)
  let par=await data.json()
  this.setState({
    articles:par.articles,
    page:this.state.page-1
  })

 }
 handlenext= async()=>{
  if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.page)){

  }
  else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=57d1379d3cdc478391e413b7df59554e&page=${this.state.page+1}&pageSize=${this.props.page}`
  let data=await fetch(url)
  let par=await data.json()
  this.setState({
    articles:par.articles,
    page:this.state.page+1
  })

  }
  

 }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey-Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,57):""} description={element.description?element.description.slice(0,64):""} url={element.urlToImage} news={element.url}
            author={element.author} date={element.publishedAt}/>

            </div>

        })}
            
            
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handleprevious}> Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.page)} type="button" class="btn btn-dark" onClick={this.handlenext}>Next </button>
        </div>
     
        
        
      </div>
    )
  }
}
