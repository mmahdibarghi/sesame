import LogoImage from "../../../assets/logo.png";
import { Navbar, Container } from "react-bootstrap";
import { List, XLg } from "react-bootstrap-icons";
import {
  TopBarContainer,
  TopBarImage,
  NavBarOpenButton,
  NavBarCloseButton,
} from "./TopBarStyles";

function TopBar(props) {
  return (
    <>
      <TopBarContainer>
        <TopBarImage src={LogoImage} />
        <NavBarOpenButton onClick={props.handleNavOpen}>
          <List />
        </NavBarOpenButton>
      </TopBarContainer>
      <NavBarCloseButton navOpen={props.navOpen} onClick={props.handleNavClose}>
        <XLg />
      </NavBarCloseButton>
    </>
  );
}

export default TopBar;
