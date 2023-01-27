import styles from "styled-components";
import { darkred, white, midblue, lightred, lightblue } from "../../../colors";

const ScoreBoardContainer = styles.div`
  width:100%;
  background-color: #353535;
  border-radius:25px;
  margin-top:50px;
  direction:rtl;
  font-family:"Dana";
  padding:0px;
  padding-top:20px;
  border:1px solid gray;
  color:${white};
`;

const ScoreBoardHeaderText = styles.h3`
  display:inline;
  margin-right:20px;
  font-size:30px;
  @media (max-width: 500px) {
    font-size:18px;
  }
  
`;

const FullBoardButton = styles.button`
 background-color: ${lightred};
 display:inline;
 border:none;
 border-radius:40px;
 padding: 7px 40px;
 color:${white};
 margin-left:10px;
font-size:15px;
@media (max-width: 500px) {
  font-size:12px;
}
transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }

`;

const FiltersButton = styles.button`
background-color: ${lightblue};
display:inline;
border:none;
border-radius:40px;
padding: 7px 40px;
color:${white};
margin-left:30px;
font-size:15px;
@media (max-width: 500px) {
  font-size:12px;
}
transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }
`;

const ScoreBoardTable = styles.table`
  margin-top:30px;
  width: 100%;

`;

const ScoreBoardRow = styles.tr`
    border-bottom: 1px solid gray;
    &:last-child{
        border-bottom:0px;
    }
  
`;

const ScoreBoardHeader = styles.th`
    padding 1.2vw;
    padding-right:1.8vw;
    font-size:25px;
    @media (max-width: 500px) {
      font-size:10px;

    }
`;

const ScoreBoardItem = styles.td`
   padding:0.4vw;
   font-size:40px;
   @media (max-width: 500px) {
    font-size:10px;

  }

`;

export {
  ScoreBoardContainer,
  FullBoardButton,
  ScoreBoardHeaderText,
  FiltersButton,
  ScoreBoardTable,
  ScoreBoardRow,
  ScoreBoardItem,
  ScoreBoardHeader,
};
