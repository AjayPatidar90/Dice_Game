import React from 'react'

const Totalscore = ({score}) => {
  return (
    <div>
<div style={{marginLeft:"50px"}}>
         <div style={{fontSize:"40px",height:"60px",marginLeft:"50px"}}><h1>{score}</h1></div>
         <div><h1>Total Score</h1></div>
</div>
    </div>
  )
}

export default Totalscore
