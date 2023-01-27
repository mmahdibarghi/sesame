import styles from "styled-components";
import { darkred, white, midblue, lightred, lightblue,middark } from "../../../colors";

const SendBoardContainer = styles.div`
  width:80%;
  background-color:${middark};
  border-radius:25px;
  margin:50px;
  direction:rtl;
  font-family:"Dana";
  padding:0px;
  padding-top:20px;
  border:1px solid gray;
  color:${white};
  
`;

const SubmitBtn = styles.button`
    background-color: #e71939;
    display:inline;
    border:none;
    border-radius:80px;
    padding: 7px 40px;
    width:100%;
    color:${white};

    font-size:120%; 
    margin-top:20px;
    transition: 0.5s ease-out;


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
  background-color: ${lightred};
  display:inline;
  border:none;
  border-radius:40px;
  padding: 5px 10px;
  color:${white};
  font-size:13px;
  float:left;
  transition: 0.5s ease-out;
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
    width:100%;
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
   
`;

export {
	SendBoardContainer,
	ShowGameButton,
	SendBoardHeaderText,
	FiltersButton,
	SendBoardTable,
	SendBoardRow,
	SendBoardItem,
	SendBoardHeader,
  WholeContainer,
  SubmitBtn,
};
