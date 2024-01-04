import Form from "./Form"
import LeftImage from "./LeftImage"
import "../css/LoginPage.css"
const LoginPage = () => {
  return (
    <div id="container">
    <div id="img">
        <LeftImage />
    </div>
    <div id="form">
        <Form />
    </div>
    </div>
  )
}

export default LoginPage