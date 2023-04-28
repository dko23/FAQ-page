import React from 'react'
import { useState } from 'react'

function Question3() {
    const[answer, setAnswer]=useState(false)
    const anwerQuestion = () => {
        setAnswer(!answer);
    }
  return (
      <div className='question'>
          
          <h5>Any Subscription?</h5><button onClick={anwerQuestion} className='plus'>+</button>
              {answer? (   <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor felis vitae tincidunt hendrerit. Praesent non elit id purus posuere condimentum. Ut id luctus diam, eu laoreet mauris. Nullam volutpat quis purus nec placerat. Vestibulum in fringilla risus. Vivamus lobortis mattis diam, at tempor ex facilisis nec. Praesent venenatis massa vel pretium tincidunt. Duis ac mollis enim, id vehicula sem.
    </p>
  ) : (
   null
  )}


    </div>
  )
}

export default Question3