import styles from "styled-components";
import { darkblue, darkred, midblue, white,middark } from "../../colors";

const TopBarContainer = styles.div`
    position: fixed;
  
    width:100%;
    top:0;
    background-color:${middark};
    padding:2px;
    margin:0px;
    z-index:10;
    text-align:center;
    color:white;
    display:none;
    border-bottom:1px solid white;

    @media (max-width: 768px) {
        display:block;
      }
`;

const TopBarImage = styles.img`
    vertical-align:center;
    width:70px;
`;

const NavBarOpenButton = styles.div`
float:right;
font-size:30px;
margin-right:10px;

`;
const NavBarCloseButton = styles.div`
position: fixed;
top:0px;
right:0px;
font-size:30px;
margin-right:10px;
z-index:100;
color:white;

display:${(props) => (props.navOpen ? "block" : "none")};

`;

export { TopBarContainer, TopBarImage, NavBarOpenButton, NavBarCloseButton };
