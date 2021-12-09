import { Link } from 'react-router-dom'
import logo  from '../logo.JPG'


const headStyle = {
    backgroundColor: "white",
    borderBottomStyle: "solid",
    borderWidth: "2px",
    borderColor: "lightgray"
}
const logoStyle = {
    height: `200px`

}

const btnStyle ={
    float: "right",
    marginTop: "75px",
    marginRight: "20px",
    color: "white",
    backgroundColor: "#0A8FF1",
    border: "1.5px solid black",
    borderRadius: "10px",
    fontSize:"30px",
    padding: "4px",
    fontFamily: "Genos, sans-serif",
    fontStyle: "italic"
}

function Header ({onLogout, login}) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }
    return (
        <div style={headStyle}>
         <img style={logoStyle} src={logo} />
        {login ?
            <button style={btnStyle} onClick={handleLogout}>Logout </button>
            :
            <Link to="/login">
                <button style={btnStyle}> Login/Signup </button>
            </Link>
        }
        </div>
    )
}
export default Header