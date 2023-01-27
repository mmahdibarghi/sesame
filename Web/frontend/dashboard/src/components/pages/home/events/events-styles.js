import styles from "styled-components";
import { darkblue, darkred, midblue, white } from "../../../colors";

const EventsContainer = styles.div`
    width:95%;
    border-radius:20px;
    background: ${midblue};
    padding:15px;
    padding-top:35px;
    color:${white};
    direction:rtl;
    font-family:"Dana";
`;

const EventsText = styles.p`
    display:inline;
    font-size:1.4vw;
`;

const DropDown = styles.div`
    float:left;
`;

const DropDownButton = styles.button`
    color:${white};
    width:130px;
    background: ${midblue};
    text-align:right;
    border: none;
    cursor: pointer;
`;

const DropDownContent = styles.div`
  display:${(props) => (props.show ? "" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1; 
  border-radius:20px;
  color: black;


  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;

  }
`;

const EventsList = styles.ul`
  width:100%;
  direction:rtl;
  padding:0;
  margin-top:20px;
`;
const EventsItem = styles.li`

  list-style: none;
  padding-top:15px;
  font-size:20px;

`;

const CalendarIcon = styles.p`
  padding:13px;
  background-color:${props=>props.color};
  border-radius:140px;
  width:50px;
  height:50px;
  text-align:center;
  display:inline-block;
  margin-left:10px;
  
`;

export {
  EventsContainer,
  DropDownButton,
  DropDownContent,
  DropDown,
  EventsItem,
  EventsList,
  CalendarIcon,
  EventsText,
};
