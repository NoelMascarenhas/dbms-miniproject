
import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import './StuSignup.css';


function StuSignup(props) {
  const [credentials, setCredentials] = useState({Sno: "", Sname:"",Panel: "",Mobile: "",Email: "", cpassword: "",confirmPassword:""}) 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      const {Sno,Sname,Panel,Mobile,Email,cpassword,confirmPassword} = credentials;
      e.preventDefault();
      const response = await fetch("http://localhost:5000/studentpost", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({Sno,Sname,Panel,Mobile,Email, cpassword,confirmPassword})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
          localStorage.setItem('userEmail', credentials.Email); 
          localStorage.setItem('token', json.token); 
         navigate('/review');
      }
      else{
         alert("User With This email Already exits")
         
      }
      
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.Sname]: e.target.value})
  }
  

  return (

    <>
    <Navbar/>
    
    <h2>Student Sign-Up <Link to="/stulogin" className="m-3 btn btn-danger my-element" >Already A User</Link></h2> 
    
      

      <div className='container-fluid content-container'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}
            className='my-5'

          >
             <div className="mb-3" >
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={onChange} type="test" className="form-control" id="name" name="name" aria-describedby="emailHelp" />
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
                     <input onChange={onChange} type="password" className="form-control"   name="confirmPassword" id="confirmPassword" required />
                </div>

             <button type='submit' className='btn-primary'>
               Submit
            </button>
             
          </form>
        </div>
        
      </div>
      
      
    </>
  );
}

export default StuSignup;

