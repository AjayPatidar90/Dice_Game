
import { useState } from 'react'
import './App.css'
import Page1 from './Component/Page1'
import Page2 from './Component/Page2'


function App() {
  const [startgame,setStartgame] = useState(false)
  
  let playbtn=()=>{
    setStartgame((play)=>!play);
  }
 
  return (
    <>
    <div>
       {startgame ? <Page2/>:<Page1 playbtn={playbtn} />}
      </div>
      
     
    </>
  )
}

export default App
