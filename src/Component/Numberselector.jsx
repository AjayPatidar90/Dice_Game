
import styled from 'styled-components';

const Numberselector = ({selectedNumber,setSelectedNumber}) => {

    const arrNumber =[1,2,3,4,5,6];
        
   
  return (
    <div>
          <div  style={{display:"flex",justifyContent:"end",marginTop:"-100px",gap:"20px",marginRight:"20px"}}>
               <h1 style={{marginTop:"70px",marginRight:"-430px"}}>Select Number</h1>
             {
                arrNumber.map((value,i)=>{
                   return(
                    <Box 
                    isSelected={value == selectedNumber} key={i} 
                    onClick={()=>
                        setSelectedNumber(value)
                    }>{value}</Box> 

                   )
                })
             }
          </div>
    </div>
  )
}

export default Numberselector;

const Box = styled.div`

   height:50px;
    width:50px;
    border:1px solid black;
    display:grid;
    place-items:center;
    font-weight:700;
    background-color: ${(props)=>(props.isSelected ? "black" : "white")};
    color:${(props)=>(props.isSelected ? "white" : "black")};
`;
