import React from 'react'

const Page1 = ({playbtn}) => {
  return (
    <div style={{display:"flex",justifyContent:"center",}}>
          <div style={{width:"400",height:"400px"}}>
              <img src="/dices.png" alt="dice" />
          </div>
          <div style={{width:"528",height:"188px",marginTop:"200px"}}>
            <h1><strong style={{fontSize:"60px"}}>DICE GAME</strong></h1>
            <button className='playbtn'  style={{width:"200px",height:"40px",Padding:"10px, 18px, 10px, 18px",marginLeft:"150px",cursor:"pointer"}} onClick={playbtn}>Play Now</button>
          </div>
    </div>
  )
}

export default Page1
