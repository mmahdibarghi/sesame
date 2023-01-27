import styles from "styled-components";
import { lightred, darkred, midblue, white } from "../colors";

const WholeContainer = styles.div`

background: #353535;


`;

const DocumentsContainer = styles.div`
    padding:3vw;
    padding-top:40px;
    direction:rtl;
    font-family:"Dana";
`;

const DocumentText = styles.p`
    font-size:18px;
    margin-top:40px;
`;
const InputWrapper = styles.div`
width:80%;
direction:rtl;
@media (max-width: 768px) {
  width:100%;
}
`;

const HeaderText = styles.h1`
  color:#ffffff;
  padding: 15px;
`;
const InputLabel = styles.p`
  font-size:25px;
  margin-bottom:10px;
  color:${white};
`;
const ErorrLabel = styles.p`
  margin-top:0.5em;
  font-size:0.75em;
  color:${lightred}
`;
const InputText = styles.input`
background-color:${white};
width:100%;
border: 0px black solid;
  border-radius: 80px;
padding:1em;
color:black;

  outline:none;
`;

const Red = styles.span`
color:red;
`;

const UploadBoxButton = styles.input`
    display:inline;
    border: 0px black solid;
    border-radius: 80px;
    width:100%;
    color:black;
    text-align:center;
    color:black;
    font-size:1em; 
    direction:ltr;
    padding:1em;
    background-color:${white};
    &::-webkit-file-upload-button {
      display:none;
    }

`;
const SubmitBtn = styles.button`
    background-color: #007ea7;
    display:inline;
    border:none;
    border-radius:80px;
    padding: 7px 40px;
    color:${white};
    font-size:30px; 
    margin-top:15px;
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }

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

const LogoContainter = styles.div`
  width:100%;
  height:100%; !important
  display:inline-block;
  background-color: #003459;
  
 `;
const Logo = styles.img`
  display:block;
  margin:auto;
  width:50%;
  text-align:center;
  position:relative;
  top:20%;
`;

const RegisterLink = styles.a`
color:#e71939;
font-size:1.2vw;
display:block; 
margin-top:10px;
font-size:120%; 
text-decoration: none;
`;
export {
	DocumentsContainer,
	DocumentText,
	Resource,
	ResourcesContainer,
	ResourceLogo,
	InputWrapper,
	InputText,
	UploadBoxButton,
	SubmitBtn,
	LogoContainter,
	Logo,
	InputLabel,
	HeaderText,
	ErorrLabel,
	RegisterLink,
	WholeContainer,
	Red,
};
