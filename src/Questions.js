import React from 'react'
import { useState } from 'react'


function Questions() {
const[answer, setAnswer]=useState(false)
    const anwerQuestion = () => {
        setAnswer(!answer);
}
  return (
      <>
          <div className='question'>
              <h5>What is CAPELLA?</h5><button onClick={anwerQuestion}className='plus'>+</button>
              {answer? (   <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor felis vitae tincidunt hendrerit. Praesent non elit id purus posuere condimentum. Ut id luctus diam, eu laoreet mauris. Nullam volutpat quis purus nec placerat. Vestibulum in fringilla risus. Vivamus lobortis mattis diam, at tempor ex facilisis nec. Praesent venenatis massa vel pretium tincidunt. Duis ac mollis enim, id vehicula sem.
    </p>
  ) : (
   null
  )}
      </div>
         
      </>
  )
}

export default Questions





//     const [content, setContent] = useState(false)
//     const showChild1=()=>{
//         setContent(true);
//     }

//     const showChild2=()=>{
//         setContent(false);
//     }

    // const showChild3=()=>{
    //     setContent(false);
    // }

//     return (
//         <>
//          <div>
//         <button onClick={showChild1}>Show Child 1</button>
//         <button onClick={showChild2}>Show Child 2</button>
//         <button onClick={()=>{}}>Show Child 3</button>
//         <p>
//         {content ? (
//     <div>
//         { template =<Child1/>}
//     </div>
//   ) : (
//     <div>
//      { template =<Child2/>}
//     </div>
//   )}
//         </p>
//       </div>
//         </>
//  )




























// isLoggedIn ?(
//     <h1>Welcome back!</h1>
//     ) : (
//        <h1>Please sign up</h1>
//     )

// {isLoggedIn ? (
//     <div>
//       <h1>Welcome Back!</h1>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   ) : (
//     <div>
//       <h1>Please Login</h1>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   )}




// let template


//     const [content, setContent] = useState(false)
//     const showChild1=()=>{
//         setContent(true);
//     }

//     const showChild2=()=>{
//         setContent(false);
//     }

    // const showChild3=()=>{
    //     setContent(false);
    // }

//     return (
//         <>
//          <div>
//         <button onClick={showChild1}>Show Child 1</button>
//         <button onClick={showChild2}>Show Child 2</button>
//         <button onClick={()=>{}}>Show Child 3</button>
//         <p>
//         {content ? (
//     <div>
//         { template =<Child1/>}
//     </div>
//   ) : (
//     <div>
//      { template =<Child2/>}
//     </div>
//   )}
//         </p>
//       </div>
//         </>
//  )
///////////////////////////////////////////////////////



// import { useEffect } from "react";
// function Child1() {
//     return (
//         <h1>I'm child 1! The best one</h1> 
//     )
// }


// function Child2() {
//     return (
//         <h1>I'm child 2! The middle One</h1>
//     )
// }


// function Child3() {
//     return (
//         <h1>I'm child 3! The last Onewt</h1>
//     )
// }



// let template


//     const [content, setContent] = useState(false)
//     const showChild1=()=>{
//         setContent(true);
//     }

//     const showChild2=()=>{
//         setContent(false);
//     }

    // const showChild3=()=>{
    //     setContent(false);
    // }

//     return (
//         <>
//          <div>
//         <button onClick={showChild1}>Show Child 1</button>
//         <button onClick={showChild2}>Show Child 2</button>
//         <button onClick={()=>{}}>Show Child 3</button>
//         <p>
//         {content ? (
//     <div>
//         { template =<Child1/>}
//     </div>
//   ) : (
//     <div>
//      { template =<Child2/>}
//     </div>
//   )}
//         </p>
//       </div>
//         </>
//  )