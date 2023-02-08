import React from 'react'
import react, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import articles from '../pages/Articles';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Cards = ({blog}) => {

  // console.log(blog);
  //   const [blogs, setBlogs] = useState([]);
  //   const getBlogs=async()=>{
  //     const blogsrequest= await axios.get(`http://192.168.0.4:3000/articles`);
      
  //     console.log(blogsrequest.data.length);
  //      setBlogs(blogsrequest.data);
  //     // return moviesrequest.data.search;
  //   }
  //   const [Blog,setBlog]=useState([]);

  // useEffect(() => {
  //   // setBlogs({
  //   //   id: 1,
  //   //   title: "Title",
  //   //   date: "01-01-2000",
  //   //   category: "Design",
  //   //   text: "lorem ipsum",
  //   //   imgsrc: './pixels.jpeg',
  //   // });
  //   getBlogs();
  // }, []);

  return (
    <div className="col-lg-6 p-5">
        {/* <div className="blog-content flex flex-col">
          <img className="w-80 h-80" src={blogs.imgsrc} />
          <div className="flex flex-row blog-info">
            <div className="flex flex-col">
              <div>{blogs.title}</div>
              <div>{blogs.date}</div>
            </div>
            <div>{blogs.category}</div>
          </div>
          <div>
            {blogs.text}
            <a href="#">Read More</a>
          </div>
        </div> */}
          <div className="card rounded" style={{width: '100%'}}>
              <div>
              <img src="/pixels.jpeg" className="card-img-top img-fluid" alt="..."/> 
              </div>
            
            <div style={{marginTop:'-10%',backdropFilter:'blur(5px)'}} >
              <div className='p-2'>
                     <div class="d-flex justify-content-between" style={{color:'#FFFFFF'}}>
                        <div>{blog.name}</div>
                        <div>desig</div>
                     </div>
                     <div style={{color:'#FFFFFF'}}>
                        {blog.created_at.slice(0,10)}
                     </div>
              </div>     
            </div>
          <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
           <p className="card-text">This is blog Card</p>
          <Link className='btn' to={`/article/${blog.id}`} style={{color:'#6941C6'}}>
               Read More
          </Link>
            
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M5.8335 14.1667L14.1668 5.83337M14.1668 5.83337H5.8335M14.1668 5.83337V14.1667" stroke="#6941C6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        </div>
      </div>
          
        {/* {
         blogs.map((blog)=>{
          
              blog=JSON.parse(blog)
              console.log(blog);
              setBlog(blog);
            // blog.map((art)=>{
              <div className="card rounded" style={{width: '100%'}}>
              <div>
              <img src="/pixels.jpeg" className="card-img-top img-fluid" alt="..."/> 
              </div>
            
            <div style={{marginTop:'-15%',backdropFilter:'blur(5px)'}} >
              <div className='p-4'>
                     <div class="d-flex justify-content-between" style={{color:'#FFFFFF'}}>
                        <div>Vansh Jaishwal</div>
                        <div>design</div>
                     </div>
                     <div style={{color:'#FFFFFF'}}>
                        11-02-2002
                     </div>
              </div>     
            </div>
          <div className="card-body">
          <h5 className="card-title">title</h5>
           <p className="card-text">xyz</p>
          <Link className='btn' to="/article" style={{color:'#6941C6'}}>
               Read post
          </Link>
            
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M5.8335 14.1667L14.1668 5.83337M14.1668 5.83337H5.8335M14.1668 5.83337V14.1667" stroke="#6941C6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        </div>
      </div>
          
          })  
         } */}
    </div>
  )
}

export default Cards;


