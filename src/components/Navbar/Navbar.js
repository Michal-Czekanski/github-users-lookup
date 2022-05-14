import { APP_NAME } from "../../assets/strings";
import "./Navbar.styled"
import { AppName, Container as Nav } from "./Navbar.styled";

function Navbar(props) {
    return (
        <Nav>
            <AppName>{APP_NAME}</AppName>
        </Nav>
    )
}

export default Navbar;