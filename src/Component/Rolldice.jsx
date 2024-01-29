

const Rolldice = ({currentdice,rollDice}) => {
  

   
    
  return (
    <div>
       <div style={{display:"flex",justifyContent:"center",marginTop:"10px",cursor:"pointer"}} onClick={rollDice}>
               <img src={`/Dice/dice_${currentdice}.png`} alt="dice1" />
              

        
          </div>
    </div>
  )
}

export default Rolldice
