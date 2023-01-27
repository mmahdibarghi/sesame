import styles from "styled-components";
import { darkred, white, midblue, middark } from "../colors";

const SideBarContainer = styles.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 22%;
  background: ${middark};
  z-index: 99;
  transition: all 0.5s ease;
  color : ${white};
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
     display:none;
   }

   @media (max-width: 768px) {
    width:100%;
  }
 
  @media (max-width: 768px) {
    width:100%;
    ${(props) => {
      if (props.open) {
        return `
        
          display:block;
        `;
      } else {
        return `
        
          display:none;
        `;
      }
    }}
  }
`;

const Logo = styles.div`
  
  display: flex;
  align-items: center;
  justify-content: center;

  padding:5vw;
  padding-top:1vh;
  padding-bottom:3vh;
  @media (max-width: 768px) {
    width:50%;
    margin:auto;
  }
`;

const NavList = styles.ul`
  width:100%;
  direction:rtl;
  padding:0;
`;
const NavItem = styles.li`

  list-style: none;
  padding-top:15px;
  padding-bottom:15px;
  padding-right:20px;
  transition: 0.3s ease-out;
  cursor:pointer;


  ${(props) =>
    props.selected &&
    `
  background-color: ${darkred};
  `} 
  ${(props) =>
    props.noHover
      ? ``
      : `
  &:hover{
    background-color: ${darkred};
    transition: 0.5s ease-out;
  }
  `}
  

`;

const NavUserIcon = styles.img`
    height: 55px;
    width: 55px;
    display: inline-block;
    vertical-align: middle;
    margin-left:5px;
    
`;
const NavItemIcon = styles.img`
    
    height: 30px;
    width: 30px;
    margin-right:10px;
    display: inline-block;
    vertical-align: middle;
    margin-left:15px;
    
    ${(props) =>
      props.left &&
      `
    float:left;
    margin-left:20px;
    `}

    ${(props) =>
      props.hover
        ? `
    &:hover{
      transform: scale(1.1);
      transition: 0.5s ease-out;
    }
    `
        : ``}

`;

const NavItemText = styles.div`
  font-family:"Dana";
    font-size:1.2vw;
    display: inline-block;
    color:${(props) => (props.disabled ? `gray` : "white")};

  @media (max-width: 768px) {
    font-size:15px;
    
  }
`;

export {
  SideBarContainer,
  Logo,
  NavItem,
  NavList,
  NavItemIcon,
  NavItemText,
  NavUserIcon,
};
