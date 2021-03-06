import "./NavBar.scss"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <div className="navBarStyle">
            <img src="/assets/nikelogo.png" alt="Nike Logo"/>
            
            <ul>
                <ul><button>Home</button></ul>
                <ul><button>Productos</button></ul>
                <ul><button>Contacto</button></ul>
                <ul><button>Nosotros</button></ul>
                <ul><button className="logIn">Log In</button></ul>
                <ul><CartWidget/></ul>
            
            </ul>
            
            
        </div>
    )
}

export default NavBar;