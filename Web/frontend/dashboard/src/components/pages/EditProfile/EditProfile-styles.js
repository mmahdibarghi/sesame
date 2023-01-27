import styles from "styled-components";
import { darkred, white, midblue, lightred, lightblue } from "../../colors";

const HasTeamContainter = styles.div`
    width:100%;
    border-radius:25px;
    direction:rtl;
    padding:5vw;
    font-family:"Dana";
    border-radius: 37px;
    border:white 2px solid;
    color:${white};
    background-color:${midblue};
    margin:0px;
    font-size:30px;
    
`;
const InputLabel = styles.p`
  font-size:25px;
  margin-bottom:10px;
  display:flex;
  justify-content:space-between;
`;
const ErorrLabel = styles.p`
  margin-top:0.5em;
  font-size:0.75em;
  color:${lightred}
`;
const InputText = styles.input`
background-color:${white};
width:100%;
border: 1px black solid;
border-radius: 80px;
padding:0.25em;
color:black;
font-size:0.75em;
padding-right:0.25em;
padding-left:0.25em;

margin-bottom:0.5em;
`;
const InputWrapper = styles.div`
width:80%;
direction:rtl;
@media (max-width: 768px) {
  width:100%;
}
`;
const UploadBoxButton = styles.input`
    display:inline;
    border:1px solid white;
    border-radius: 80px;
    width:100%;
    color:white;
    text-align:center;
    font-size:0.5em; 
    direction:ltr;
    padding:1em;

    &::-webkit-file-upload-button {
      display:none;
    }
`;

const EditProfileHeader = styles.h1`
font-family:"Dana";
  font-size:30px;
  color:${white};
  text-align:right;
  margin:2vw;
  margin-top:0px;
  margin-right:0px;
  border-right:8px solid white;
  padding:1vw;
`;

const SubmitButton = styles.button`
    display:inline;
    background-color: ${lightred};
    border-radius: 80px;
    width:100%;
    color:white;
    text-align:center;
    font-size:0.5em; 
    direction:ltr;
    padding:1em;

    &::-webkit-file-upload-button {
      display:none;
    }
`;

export {
	InputWrapper,
	ErorrLabel,
	InputText,
	HasTeamContainter,
	InputLabel,
	UploadBoxButton,
	SubmitButton,
	EditProfileHeader,
};
