import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import axios from 'axios'
const Articles = () => {
   const {id} = useParams();
   useEffect(() => {
      getBlogs();
   }, []);
   const [blogs, setBlogs] = useState([]);
   const getBlogs=async()=>{
     const blogsrequest= await axios.get(`http://192.168.195.229:3000/articles/${id}`);
     
   console.log(blogsrequest.data);
      setBlogs(blogsrequest.data);
    }
    console.log(blogs.length);
  return (
    <div>
      <Nav/>
         {/* if({blogs.length}) */}
         {blogs? 
         (<div className='d-flex justify-content-center flex-column'>
            <div className='d-flex flex-column p-5 '>
                <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '16px',lineHeight: '24px',
                color: '#7F56D9'}} className='d-flex justify-content-center'>
                   Design 
                </div>
                <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '250%',lineHeight: '60px',
                color: '#101828'}} className='d-flex justify-content-center'>
                   {blogs.title?blogs.title:''}
                </div>
                <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '15px',lineHeight: '30px',
                color: '#475467'}} className='d-flex justify-content-center'>
                    How do you create your compelling presetatios that wow your collegues and impress your managers
                </div>
                <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '16px',lineHeight: '28px',
                color: '#101828', marginTop:'2%'}} className='d-flex justify-content-center'>
                       {blogs.author?blogs.author.name:''?blogs.author.name:''} 
                </div>
                <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '16px',lineHeight: '24px',
                color: '#475467'}} className='d-flex justify-content-center'>
                       {blogs.created_at?blogs.created_at.slice(0,10):''} 
                </div>
            </div>
            <div className='d-flex justify-content-center p-5' style={{marginTop:'-5%'}}>
               <img src="/pixels.jpeg" className="card-img-top img-fluid" alt="..."/> 
            </div>
            <div className='d-flex justify-content-center p-5' style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '18px',lineHeight: '30px',
                color: '#475467'}}>
                {blogs.text?blogs.text:''}
            </div>
       </div>):('')
       }
    </div>
  )
}

export default Articles