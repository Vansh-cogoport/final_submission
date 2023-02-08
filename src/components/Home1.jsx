import React,{useState,useEffect} from 'react'
import Cards from "./Cards";
import Nav1 from "./Nav1";
import Block from "./Block";
import axios from 'axios'
import Footer from './Footer';
const Home1 = () => {

  const [blogs, setBlogs] = useState([]);
  // const [Blog,setBlog]=useState([]);
   
   

  useEffect(() => {
    // setBlogs({
    //   id: 1,
    //   title: "Title",
    //   date: "01-01-2000",
    //   category: "Design",
    //   text: "lorem ipsum",
    //   imgsrc: './pixels.jpeg',
    // });
    getBlogs();
  }, []);

  const getBlogs=async()=>{
    const blogsrequest= await axios.get(`http://192.168.195.229:3000/articles`);
    
    console.log(blogsrequest.data);
     setBlogs(blogsrequest.data.slice(0,8));
    // return moviesrequest.data.search;
  }


  return (


    <div>
        <Nav1/>
     <Block/>
    <div className="container-fluid d-grid gap-3" style={{padding:'7%'}}>
      
            <div className='row'>
                <div className='col-lg-3'>
                    <input type="tesxt" placeholder="Search"></input>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-3'>newest first</div>
            </div>

  <div className="row">
    {/* <div className='col-lg-6'> */}
      {blogs.length>0?
      blogs.map((m)=>{
        return <Cards blog = {m} />
      }):('')}
      {/* </div> */}
      {/* <Cards/> */}
    
    {/* <div className="col-lg-6">
       <Cards/>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6">
      <Cards/>
    </div>
    <div className="col-lg-6">
       <Cards/>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6">
      <Cards/>
    </div>
    <div className="col-lg-6">
       <Cards/>
    </div> */}
  </div>


</div>
  <Footer/>
    </div>
  )
}

export default Home1
