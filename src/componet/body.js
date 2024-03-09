import React from 'react'
import './Body.css'
const Body = (data) => {
  

console.log(data.prop)
  return (
   <div style={{display:"flex",flexWrap:"wrap", width:"auto", gap:"0.8vw", padding:"4vw",  border:"2px solid red"}} >
    {data.prop.map((keyy, index)=> {
  return(
    <div style={{}}>
     <div key={index}style={{height:"25vh", border:"1px solid grey", width:"8vw",backgroundColor:keyy.hex }} id="colorDiv"><p style={{marginTop:"8.1VW", backgroundColor:"white", height:"3vw", fontStyle:"italic"}}>{keyy.name}</p></div>
     </div>
  )

})
}
   </div>
  )
}

export default Body