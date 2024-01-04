import React from 'react'

const Inputbox = ({placeholder}) => {
  return (
    <>
        <input id="input" type="textbox" placeholder= {placeholder} style={{
        width: "420px",
        height: "45px",
        padding: "10px",
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
        border: "1px #E8E8E8 solid",
        borderRadius: "5px",
        gap: "13px",
        
        }}> 
    </input>
</>
  )
}

export default Inputbox