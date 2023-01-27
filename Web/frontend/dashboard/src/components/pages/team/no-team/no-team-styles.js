import styles from "styled-components";
import { darkred, white, midblue, lightred, lightblue } from "../../../colors";

const NoTeamContainter = styles.div`
    width:100%;
    border-radius:25px;
    direction:rtl;
    padding:50px;
    font-family:"Dana";
    border-radius: 37px;
    border:white 2px solid;
    color:${white};
    background-color:${midblue};
`;

const InputText = styles.input`
    background-color:${white};
    width:100%;
    border: 1px gray solid;
    border-radius: 60px;
    padding:15px;
    margin-top: 15px;
    margin-bottom: 15px;

    color:black;
    font-size:20px;
    text-align:right;
    display:inline-block;
    ::placeholder {
        color: gray;
    }
`;

const TeamButton = styles.button`
    background-color: ${lightblue};
    display:inline-block;
    border:none;
    border-radius:40px;
    padding: 10px 40px;
    color:${white};
    margin-top: 15px;
    margin-bottom: 15px;

    font-size:160%;
    white-space:nowrap; overflow:hidden; 
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }
`;

export { NoTeamContainter, InputText ,TeamButton};
