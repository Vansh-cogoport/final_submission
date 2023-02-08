
import React, { useState, useRef,useEffect } from 'react'
import Nav from '../components/Nav'
import { Link,useNavigate} from "react-router-dom"
import { v4 as uuid } from "uuid";
import Footer from '../components/Footer';



const Signup = () => {
  const signnameRef = useRef(null);
  const signemailRef = useRef(null);
  const signdes = useRef(null);
  const signpassRef = useRef(null);
  const signcnfRef = useRef(null);
  const navigate=useNavigate();
  
  const addProfile=async(e)=>{
      
    const response  = await fetch('http://192.168.195.229:3000/authors',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        name: signnameRef.current.value,
        email: signemailRef.current.value,
        description: signdes.current.value, 
        password: signpassRef.current.value,
        password_confirmation: signcnfRef.current.value
      })
    });
     if(signpassRef.current.value===signcnfRef.current.value && signnameRef.current.value && signemailRef.current.value && signpassRef.current.value && signcnfRef.current.value)
    {
      const data  = await response.json();
    console.log(data);
    if(data.id){
      navigate('/login');
    }
    }
    else {
      alert('Invalid Credentials')
    }
  }
  return (
    <div>
      <Nav/>

      {/* <div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="text" placeholder='Enter email' ref={signemailRef} autoComplete="off" />
        </div>
        <button onClick={e => checkEmail(e)}>Signup </button><br />
        <a>OR</a><br />
        <button >Sign with google</button><br />
        <button >Sign with facebook</button><br />
        <button >Sign with apple</button><br />
        <a>Already have a account?<span><span>......</span><Link to="/login">Login</Link></span></a>
      </div> */}
      <div class='d-flex justify-content-center'>

        <div class='py-5'>
          <h1 class='py-3 px-5'>Create a account</h1>
          <form>
            <div class="form-outline mb-4">
              <label class="form-label" >Name</label>
              <input ref={signnameRef} type="name"  class="form-control" name='name' placeholder='Enter name' />

            </div>
            <div class="form-outline mb-4">
              <label class="form-label" >Email address</label>
              <input ref={signemailRef} type="email"  class="form-control" name='email' placeholder='Enter email' />

            </div>
            <div class="form-outline mb-4">
              <label class="form-label" >Description</label>
              <input ref={signdes} type="description" class="form-control" name='text' placeholder='enter description' />

            </div>
            <div class="form-outline mb-4">
              <label class="form-label" >Password</label>
              <input ref={signpassRef} type="password" class="form-control" name='password' placeholder='Create a password' />

            </div>
            <div class="form-outline mb-4">
              <label class="form-label" >Confirm Password</label>
              <input ref={signcnfRef} type="password" class="form-control" name='password' placeholder='Create a password' />

            </div>
            

            <button type="button" onClick={addProfile} class="btn btn-primary btn-block mb-4 w-100">Sign up</button>
            <button type="button" class="btn btn-light btn-block mb-4 w-100">Sign in with google</button>

            <div class="text-center">
              <p style={{ fontSize: "12px" }}>Don’t have an account? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Signup