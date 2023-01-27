import styles from "styled-components";
import { darkblue, darkred, midblue, white } from "../../colors";

const DocumentsContainer = styles.div`
    border-radius:80px;
    background: ${white};
    padding-top:40px;
    padding-bottom:20px;

    color:${white};
    direction:rtl;
    font-family:"Dana";
    border: 1px white solid;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;

const WholeContainer = styles.div`
height:100vh;
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
`;
const InputText = styles.input`
background-color:${white};
width:100%;
border: 1px gray solid;
border-radius: 60px;
padding:15px;
margin: 10px;
color:black;
font-size:20px;
text-align:center;
::placeholder {
    color: gray;
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
  width:60%;
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
    margin: 0.5em;
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
    background-color: blue;
    display:inline;
    border:none;
    border-radius:80px;
    padding: 7px 40px;
    width:80%;
    color:${white};
    font-size:180%; 
    margin-top:30px;
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }

`;

const ForgotButton = styles.button`
    background-color: ${white};
    display:inline;
    border:3px solid blue;
    border-radius:80px;
    padding: 12px;
    width:80%;
    color:blue;
    font-size:100%; 
    margin-top:5px;
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }
`;

const RegisterLink = styles.a`
color:${darkred};
font-size:1.2vw; 
margin-top:25px;
font-size:140%; 

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
    background-color: #007ea7;
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
