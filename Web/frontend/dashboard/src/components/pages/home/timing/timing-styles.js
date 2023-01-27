import styles from "styled-components";
import { darkblue, darkred, midblue, white } from "../../../colors";

const TimingContainer = styles.div`
    width:95%;
    border-radius:20px;
    background: ${midblue};
    padding:20px;
    padding-top:35px;
    padding-right:30px;
    color:${white};
    font-family:"Dana";
    direction:rtl;
    margin-top:30px;
    height:500px;
    overflow-y:scroll;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    &::-webkit-scrollbar {
       display:none;
     }
    
`;

const TimingText = styles.p`
    display:inline;
    font-size:1.3vw;
`;

const ScrollButtons = styles.div`
    float:left; 
`;

const ScrollButton = styles.button`
    color:${white};
    background: ${midblue};
    border: none;
    cursor: pointer;
    display:block;
`;

const ClocksStyle={
    fontSize:15,
    textAling:"right",
    verticalAlign:"middle",
}

const TimesStyle = {
  marginBottom: 20,
};

export { TimingContainer,ClocksStyle,TimingText, ScrollButtons, ScrollButton, TimesStyle };
