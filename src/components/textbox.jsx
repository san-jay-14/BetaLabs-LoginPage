import "../css/LoginPage.css"
import image from "../assets/google.png"
const textbox = () => {
  return (
    <div style={{
        width: "420px",
        height: "45px",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        border: "1px #E8E8E8 solid",
        borderRadius: "5px",
        gap: "13px",
        cursor: "pointer",}}>
    <img src={image} style={{ width: "25px", height: "25px" }} />
    <div id="text3">
        Continue with google
    </div>
    </div>
  )
}

export default textbox