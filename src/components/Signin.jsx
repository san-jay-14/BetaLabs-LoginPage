import React from 'react'
import Inputbox from "../components/inputbox"
const Signin = () => {
  return (
    <div id='signin' style={{marginBottom: "0"}}>
    <div>
    <p className='text5'>Email</p>
        <Inputbox placeholder={"mail@abc.com"}/>
    </div>
    <div style={{
        marginTop: "0",
        marginBottom: "0"
    }}>
    <p className='text5'>Password</p>
        <Inputbox placeholder={"**********"}/>
    </div>
    </div>
  )
}

export default Signin