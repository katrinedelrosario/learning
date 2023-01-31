import { HeaderStyle } from "../styled/header.style";
import NavBarPrimary from "./navbarprimary";

const Header = () => {
    return (
        <HeaderStyle>
            <h1>wallywood</h1>
            <NavBarPrimary/>
        </HeaderStyle>
    )
}

export default Header