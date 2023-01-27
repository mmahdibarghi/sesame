import styles from "styled-components";
import { darkblue, darkred, midblue, white } from "../../colors";

const DocumentsContainer = styles.div`
    width:100%;
    border-radius:20px;
    background: ${midblue};
    padding:30px;
    padding-top:40px;
    margin-top:70px;
    color:${white};
    direction:rtl;
    font-family:"Dana";
    padding-left:100px;
`;

const DocumentText = styles.p`
    font-size:18px;
    margin-top:48px;

`;

const Dot = styles.p`
    width:20px;
    height:20px;
    border-radius:30px;
    background-color:${darkred};
    text-align:center;
    margin:auto;
    margin-top:50px;
    
`;

const ResourcesContainer = styles.div`
    position:fixed;
    left:30px;
    top:30vh;
`;

const Resource = styles.div`
    font-family:"Dana";
    direction:rtl;
    color:white;
    border-radius:14px;
    background: ${midblue};
    padding:20px;
    width:15vw;
    margin-top:10px;

`;

const ResourceLogo = styles.div`
    width:40px;
    height:40px;
    background-color: #003459;
    border-radius:8px;
    display:inline-block;
    vertical-align:middle;
    margin-left:10px;
`;
const ExitButton = styles.button`
    background-color: ${darkred};
    display:inline-block;
    border:none;
    border-radius:40px;
    padding: 7px 40px;
    color:${white};
    margin-top: 15px;
    margin-bottom: 15px;

    font-size:30px;
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }
`;

const HeaderContainer = styles.div`
display:flex;
flex-direction:row;
width:100%;
justify-content: space-between;
align-items: center`;
export {
	ExitButton,
	DocumentsContainer,
	DocumentText,
	Dot,
	Resource,
	ResourcesContainer,
	ResourceLogo,
	HeaderContainer,
};
