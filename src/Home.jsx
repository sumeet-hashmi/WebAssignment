import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import React, { useState } from 'react'
import Slider from './Slider'
import Accord from './accordian';
import MenuIcon from '@mui/icons-material/Menu';
import { ClassNames } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
function Home() {
    const [expand,setExpand]=useState(false);
  return (
    <div className='bg-clr'>
<>

        <nav className='nav-main'> 
            <div>
                <h1 className='pedlar-1'>pedlar<br/><br/><br /></h1>
                </div>
                <div className='men_icon' onClick={showMenu}>
                < MenuIcon /> 
                </div>
          <ul id="navLinks"> 
          
          <div className='close_icon' onClick={hideMenu}> 
                < CloseIcon /> 
                </div>
            <li> <a className='for-creator' href="#">For Creators</a></li> 
              <li>  <a className='for-brands' href="#">For Brands</a></li> 
                <li className='nav-login'>
                <a className='nav-login-in' href="#">Login</a></li>
                <li className='nav-getacces' > 
                <a className='nav-getacces-in' href="#">GetAccess</a>
                </li>
                
                </ul>  
                
                
        </nav> 
<div className='first-div-in'>
<div className='first-img'>
<img className='img' src='images.jpeg'></img>
</div>
 <div className='second'>
<div className='fonts-sizeh'>
    <b>Find new  <br/> audience for<br/> your brand</b></div>
<p className='second-txt'>Sell directly to Aussie shoppers through our <br/>network of talented social media</p>
<div className='btn0'> <a className='btn1-inner' href="#">Schedule Call</a>
                </div>


</div> 

</div>


<div className="texts-box1">
    <h1>Create Moments of inspiration closer to the point of purchase</h1>
</div>


<div className="row">
            <div className='boxes'>
                <h2>Increase sale and brand exposue</h2>
                <p className="box-p">Let our creators promote and sell your products for you</p>
            </div>
            <div className='boxes'>
                <h2>Set and Forget</h2>
                <p className="box-p">All stocks are integrated in under two minutes.Fulfill orders as normal</p>
            </div>
            <div className='boxes'>
                <h2>Free to join,only pay comission on sales</h2>
                <p className="box-p">Free forever only pay comission on sales creators make</p>
            </div>
            <div className='boxes'>
                <h2>People trust People</h2>
                <p className="box-p">Deepen existing creators relationships or find new,lucrative partnerships</p>
            </div>


         </div>
        

        <div className='image2'>
<img src='Download3.png'></img>

</div>

    <h3 className='texts-box2'>Work with the world most talented influencers</h3>
    <div className='slide-1'><Slider/>
    </div>
    <div className='heads-call-2'>
        
        <div>
        <h5 className='frq-ask'>Frequently Asked Questions</h5>
    </div>
     <div className='main-call-2'>
        <Accord/>
    </div> 
    
    </div>
    
 <div className='form-head'>
    <form>
  <h4 className='table-head'>Expand your business today</h4>
  <p className='table-headpara'>Fill in the form below. We'll get in touch to begin the proces</p>
  
  <div className='form-input-fields'> 
    <div className='form-input-field-1'>
  <label> <input type="text"  placeholder="First Name"></input></label>
 <label> <input type="text"  placeholder="Company Name"></input></label>
 <label> <input type="text"  placeholder="Email Address"></input></label>
 </div>
 <div className='form-input-field-2' >
 <label>  <input type="text"  placeholder="Last Name"></input></label>
 <label> <input type="text"  placeholder="Phone Num"></input></label>
 <label> <input type="text"  placeholder="Instagram Handle"></input></label>
   
  
  </div>
    </div>
  <button className='btn1'>Schedule a Call</button>

  </form> 

  </div> 
        
    <div className="footer">
    <div className="footer-col-1">
        <h1>pedler</h1>
        <p>We are always here to help <br/><br/>
            contact us at contact@pedler.com and out<br/>
            customer service team will be in touch.</p>
            
    </div>
    <div className='media-call-2'>
        <ul>
            <li style={{padding:"5px"}}><a className='footer-col-2' href="#">Shipping & Returns</a></li>
            <li style={{padding:"5px"}}><a className='footer-col-2' href="#">Interrnational Shipping</a></li>
            <li style={{padding:"5px"}}><a className='footer-col-2' href="#">FAQS</a></li>
            <li style={{padding:"5px"}}><a className='footer-col-2' href="#">Terms and Conditions</a></li>
            <li style={{padding:"5px"}}><a className='footer-col-2' href="#">Privacy Policy</a></li>
        </ul>
    </div>
    </div>
    </>
    </div>)
}

var navLinks= document.getElementById("navLinks");
function showMenu(){
     navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-370px";
}

export default Home;


