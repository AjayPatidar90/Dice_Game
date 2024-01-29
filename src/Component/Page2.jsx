import React, { useState } from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Numberselector'
import Rolldice from './Rolldice'
import Rule from './Rule'

const Page2 = () => {
     const [score,setScore] = useState(0)
     const [selectedNumber,setSelectedNumber] = useState()
     const [currentdice,setCurrentdice] = useState(1)
     const [rule,setRule] = useState(false)
     


     const randomNumber=(min,max)=>{
          return Math.floor(Math.random() * (max-min)+ min) ;
             
      }
  
      const rollDice=()=>{
          if(!selectedNumber){
               
               alert("Not selected number")
               return
          }
         const roll = randomNumber(1,7);
         setCurrentdice((prev)=>roll);

         if(selectedNumber === roll){
           setScore((prev)=> prev + roll)
         }else{
          setScore((prev)=>prev - 1)
         }
         setSelectedNumber("")
      }
   
  return (
    <div>
         
          <Totalscore  score={score}/>
          <Numberselector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />

          <Rolldice currentdice={currentdice} rollDice={rollDice}/>
          <div style={{display:"flex",justifyContent:"center"}}>
               <h1>Click on Dice to roll</h1>
          </div>

          <div  style={{display:"flex",justifyContent:"center"}}>
                <button style={{width:"200px",height:"30px"}} onClick={()=>{
                    
                    setScore("0")
                }}>Reset Score</button>
          </div>

          <div  style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
               <button style={{width:"200px",height:"30px",backgroundColor:"black",color:"white"}} onClick={()=>setRule((prev)=>!prev)}>{rule ? "Hide" : "Show"} Rule</button>
              
          </div>
               {rule && <Rule  />}
            <div>
                
            </div>
            
    </div>
  )
}

export default Page2
