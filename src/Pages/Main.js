import React from 'react'
import { Link } from 'react-router-dom'
export default function Main(props) {
  return (
    <div class="container">
  <div class="row">
<div class="col-lg-5 sales">
          <div class="info" >
            <div className='title' >
            <p>CAPELLA</p>
            </div>


            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            

<Link to='/FAQ'><button class='button'> Read More</button></Link>
         </div>
  </div>
< div class="col-lg-7 part">  
<img class="coin" src={props.answer}alt="Card image cap"/>
    
</div>
</div>
</div> 
  )
}






