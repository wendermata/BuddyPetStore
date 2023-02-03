import './Styles/NavBar.css'
import logo from '../imgs/logo.png';

function NavBar(){
    return(
        <nav>
            <ul>
                <li><img className="logo" src={logo}></img></li>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#cart">Carrinho</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    )
}
export default NavBar