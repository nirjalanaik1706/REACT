import logo from './logo.svg';
import Counter from './counter';

import './App.css';
import { useState } from 'react';

function App() {
  const [likes,setLikes]=useState(600);
  const handler=(data)=>{
    alert("Button clicked")
  }

    
      

      return(
        
        <div className='App'>
           <label>Likes:{likes}</label>
          {/* <input type="text" placeholder='Enter your name' ></input> */}
          <Counter count={likes} update={handler}></Counter>
        </div>
      );

   
  
}

export default App;
