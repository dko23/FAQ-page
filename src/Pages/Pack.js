import React from 'react'
import Questions from '../Questions';
import Question2 from '../Question2';
import Question3 from '../Question3';



export default function Pack(props) {
  return (
      <div>  
          <div className='container faq-page'>
        <div className='faq'>
          <div className='combine'>
          <h1>FAQ</h1>
          <img class="search" src={props.search}alt="Card image cap"/>
          </div>
          <div className='box'>
          <Questions />
      <Question2 />
      <Question3/>   
        </div>
          </div>
    </div>
    </div>
  )
}


