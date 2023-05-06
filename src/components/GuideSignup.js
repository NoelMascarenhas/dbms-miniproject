

import Navbar from './Navbar';
import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {useNavigate} from 'react-router-dom';
import './StuSignup.css';

function GuideSignup(props) {
  const [credentials, setCredentials] = useState({name:"",email: "", cpassword: "",confirmPassword:""}) 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      const {name,email,cpassword,confirmPassword} = credentials;
      e.preventDefault();
      const response = await fetch("http://localhost:5000/guidepost", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name,email, cpassword,confirmPassword})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
          localStorage.setItem('guideEmail', credentials.email); 
          localStorage.setItem('token', json.token); 
         navigate('/guidereview');
      }
      else{
         alert("Please Login Properly")
      }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
 


  return (

    <>
    <Navbar/>
    <h2>Guide Sign-Up <Link to="/stulogin" className="m-3 btn btn-danger my-element" >Already A User</Link></h2> 
   
      <div className='container-fluid content-container'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}
            className='my-5'
          >
             <div className="mb-3 p" >
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={onChange} type="test" className="form-control"  id="name" name="name" aria-describedby="emailHelp" />
                 </div>
                 <div className='mb-3 '>
               <label htmlFor='email' className='form-label'>
                Email address
               </label>
               <input onChange={onChange}
                 type='email'
                 className='form-control'
                 id='email'
                 name='email'
                 aria-describedby='emailHelp'
              />
              <div id='emailHelp' className='form-text '>
                 We'll never share your email with anyone else.
             </div>
             </div>
             <div className="mb-3 " >
                     <label htmlFor="password" className="form-label">Password</label>
                     <input onChange={onChange} type="password" className="form-control"  name="cpassword" id="cpassword" required/>
                 </div>
                <div className="mb-3 " >
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                     <input onChange={onChange} type="password" className="form-control"  name="confirmPassword" id="confirmPassword" required />
                </div>

             <button type='submit' className='btn btn-primary'>
               Submit
            </button>
             
          </form>
        </div>
        
      </div>
      
    </>
  );
}

export default GuideSignup;

