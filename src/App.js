import React from 'react';
import './index.css';
import Student from './Student';

function App(){
  const[status, setStatus]=React.useState(true)
     
    
  
    return(
        <div className="App">
          {
            status? 
            <h1>Hello World!</h1>: null
          }
          
          <button onClick={()=>setStatus(false)}>Hide</button>
          <button onClick={()=>setStatus(true)}>Show</button>
          
           </div>
    );
   
}


    
     

export default App;