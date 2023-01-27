import styles from "styled-components";
import { darkblue, darkred, white } from "../../../colors";

const AccessCardContainer = styles.div`
    width:100%;
    height:100%;
    background-color:${(props) => props.color};
    margin:0px;
    border-radius:20%;
    align-items:center;
    text-align:center;
    font-family:"Dana";
    color:${white};
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }
`;

const AccessCardImage = styles.img`
    margin-top:20px;
    margin-left:10px;
    margin-right:10px;
    width:65%;
    margin-bottom:5px;
`;
const AccessCardText = styles.p`
    font-size:2vw;
    @media (max-width: 500px) {
        font-size:4vw;
  
      }
`;

export { AccessCardContainer, AccessCardImage, AccessCardText };
