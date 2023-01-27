import styles from "styled-components";
import { darkred, white, midblue, lightred, lightblue } from "../../colors.js";

const HasTeamContainter = styles.div`
    width:100%;
    border-radius:25px;
    direction:rtl;
    padding:50px;
    font-family:"Dana";
    border-radius: 37px;
    border:white 2px solid;
    color:${white};
    background-color:${midblue};
    margin:0px;
    font-size:30px;
    
`;

const Dot = styles.p`
    width:20px;
    height:20px;
    border-radius:30px;
    background-color:${darkred};
    text-align:center;
    display:inline-block;
    margin:0px;
    
`;

const NameText = styles.p`
display:inline-block;
font-size:0.65em;
margin:0px;
`;

const CopyBtn = styles.button`
    background-color: ${darkred};
    display:inline-block;
    border:none;
    border-radius:10px;
    color:${white};
    margin-top: 15px;
    margin-bottom: 15px;
      padding:0.25em;
    font-size:0.5em;
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }
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

const SendBoardContainer = styles.div`
  width:100%;
  background-color:${midblue};
  border-radius:25px;
  margin-top:50px;
  direction:rtl;
  font-family:"Dana";
  padding:0px;
  padding-top:20px;
  border:1px solid gray;
  color:${white};
`;

const SendBoardHeaderText = styles.h3`
  display:inline;
  margin-right:20px;
  
`;

const FiltersButton = styles.button`
  background-color: ${lightblue};
  display:inline;
  border:none;
  border-radius:40px;
  padding: 7px 32px;
  color:${white};
  margin-left:30px;
  font-size:13px;
  transition: 0.5s ease-out;
  &:hover{
      transform: scale(1.07);
      transition: 0.5s ease-out;
    }
`;


const ShowGameButton = styles.button`
  background-color: ${darkred};
  display:inline-block;
  border:none;
  border-radius:10px;
  color:${white};
  padding:0.25em;
  font-size:1em;
  transition: 0.5s ease-out;
  download;
  &:hover{
      transform: scale(1.07);
      transition: 0.5s ease-out;
    }


`;

const SendBoardTable = styles.table`
  margin-top:30px;
  width: 100%;

`;

const SendBoardRow = styles.tr`
    border-bottom: 1px solid gray;
    text-align:center;
   
    &:last-child{
        border-bottom:0px;
    }
  
`;

const SendBoardHeader = styles.th`
    padding 20px;
    font-size:20px;

`;

const SendBoardItem = styles.td`
   padding:10px;
   justifyContent: 'center',
   alignItems: 'center'
   margin:2em;
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





const ShowGameContainer = styles.div`
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
`;








const HeaderContainer = styles.div`
display:flex;
flex-direction:row;
width:100%;
justify-content: space-between;
align-items: center
`;



export {
	HeaderContainer,
	ExitButton,
	HasTeamContainter,
	Dot,
	NameText,
	InputText,
	CopyBtn,
	SendBoardContainer,
	ShowGameButton,
  ShowGameContainer,
	SendBoardHeaderText,
	FiltersButton,
	SendBoardTable,
	SendBoardRow,
	SendBoardItem,
	SendBoardHeader,
  
};
