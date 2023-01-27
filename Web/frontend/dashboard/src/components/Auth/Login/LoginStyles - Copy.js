import styles from "styled-components";
import { darkblue, darkred, midblue, white } from "../../colors";

const DocumentsContainer = styles.div`
    border-radius:40px;
    background: ${white};
    padding-top:40px;
    padding-bottom:20px;
    box-shadow: 20px;
    
    color:${white};
    direction:rtl;
    font-family:"Dana";
    border: 1px white solid;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-bottom:2em;
`;

const WholeContainer = styles.div`
height:100%;
min-height:100vh;
display:flex;
justify-content:center;
align-items: center;
background-size: cover;
background-image:  url(./signin-background.jpg);
`;

const HeaderText = styles.h1`
  color:gray;
  font-weight: bold;
`;
const DocumentText = styles.p`
    font-size:18px;
    margin-top:40px;
`;
const InputWrapper = styles.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
outline:none;
width:80%;
${(props) => (props.top ? `margin-top:8px` : ``)}
`;
const InputText = styles.input`
background-color:${white};
width:100%;
border: 1px gray solid;
border-radius: 60px;
padding:15px;
margin: 5px;
color:black;
font-size:20px;
text-align:center;
::placeholder {
    color: gray;
  }

:focus{
  outline:none;
}
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

const Logo = styles.div`
  display:block;
  margin:auto;
  padding-bottom:20px;
  width:40%;
  text-align:center;
`;

const Line = styles.hr`
  border-top: 2px solid black;
  width:100%;

`;
const LoginIcon = styles.img`
  height: 55px;
  width: 55px;
  display: inline-block;
  vertical-align: middle;
  margin-left:5px;
`;

const UploadBoxButton = styles.input`
    background-color: ${darkred};
    display:inline;
    border:none;
    border-radius:15px;
  
  text-align:center;
    color:${white};
    font-size:1em; 
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }

`;
const SubmitBtn = styles.button`
    background-color: #e71939;
    display:inline;
    border:none;
    border-radius:80px;
    padding: 7px 40px;
    width:70%;
    color:${white};

    font-size:150%; 
    margin-top:20px;
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }

`;

const ForgotButton = styles.button`
    color: red;
    background-color: ${white};
    display:inline;
    border:3px solid #e71939;
    border-radius:80px;
    padding: 12px;
    width:70%;
    font-size:90%; 
    margin-top:8px;
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }
`;

const RegisterLink = styles.a`
color:${darkred};
font-size:1.2vw;
display:block; 
margin-top:10px;
font-size:120%; 
text-decoration: none;
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
    background-color: rgb(255,100,20,0.7);
    border-radius:8px;
    display:inline-block;
    vertical-align:middle;
    margin-left:10px;
`;

export {
	DocumentsContainer,
	DocumentText,
	Dot,
	Resource,
	ResourcesContainer,
	ResourceLogo,
	WholeContainer,
	InputWrapper,
	InputText,
	UploadBoxButton,
	SubmitBtn,
	HeaderText,
	ForgotButton,
	RegisterLink,
	Logo,
	Line,
	LoginIcon,
};
