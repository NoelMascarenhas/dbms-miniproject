import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Prelogin.css';

function PreLoginPage() {

    const navigate = useNavigate();
  
  
    const signUp = () => {
        navigate('/prelogin');
      };

const studentclick =()=>{
    navigate('/stulogin')
}
const coordinatorclick =()=>{
    navigate('/cologin')
}
const guideclick =()=>{
    navigate('/guidelogin')
}

  return (
    <>
      <Navbar/>
      <div className='container-fluid' style={{
          backgroundImage:'url(https://formfees.com/wp-content/uploads/mit-pune.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '90vh',
          width: '98vw',
          position: 'relative',
          marginTop: '40px',
        }} >
      </div>
      <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '50%',
            height: '40%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}>
            <h1>Are you a...</h1>
            <div className="container">
              <div><button className='login-card' onClick={studentclick}>Student</button></div>
              <div><button className='login-card' onClick={guideclick}>Guide</button></div>
              <div><button className='login-card' onClick={coordinatorclick}>Coordinator</button></div>
            </div>
        </div>
    
    </>
  );}

export default PreLoginPage;