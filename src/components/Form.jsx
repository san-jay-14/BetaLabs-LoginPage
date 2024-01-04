import Logo from "../components/Logo"
import "../css/LoginPage.css"
import Textbox from "./textbox"
import Signin from "../components/Signin"
import check from "../assets/check.svg"
import LoginButton from "./LoginButton"
const Form = () => {
  return (
    <>
        <Logo />
        <div id="formContainer">
            <div>
                    <div id="text1">
                        Login to your account
                    </div>
                    <div id="text2">
                        see whats going on with your business
                    </div>
            </div>
            <Textbox />
            <div id="text4" style={{
                display: "flex",
                justifyContent: "center",   
            }}>
            ------------- or Signin with Email-------------
            </div>
            <Signin />
            <div id="belowdiv" style={{marginTop: "0px"}}>
                <div id="remember">
                <img id="check" src={check} style={{width: "12px", height: "12px", backgroundColor: "#7F265B", marginRight: "8px", cursor: "pointer"}}/>
                    Remember me
                </div>
                <div id="forgot">
                    Forgot Password?
                </div>
            </div>
            <LoginButton />
            <div id="footer">
                <div id="text7">
                    Not Registered yet?
                </div>
                <div id="text8">
                    Create an account
                </div>
            </div>
        </div>
    </>
  )
}

export default Form