import styles from "styled-components";
import { darkred, white, midblue, lightred, lightblue } from "../../../colors";

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
margin:0px;
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
export { HasTeamContainter, Dot, ExitButton, NameText, InputText, CopyBtn };
