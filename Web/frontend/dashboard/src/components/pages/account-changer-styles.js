import styles from "styled-components";
import { darkblue, darkred, white } from "../colors";

const PageContainer = styles.div`
    
    position: fixed;
    overflow-y: scroll;
    height: 100%;
    top:0;
    left:0;
    width:100%;
    background-color:${white};
    margin:0px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
       display:none;
     }

     @media (max-width: 768px) {
      width:100%;
      padding-top:55px;
    }
`;

export { PageContainer };
