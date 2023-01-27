import styles from "styled-components";
import { darkblue, darkred, white,middark } from "../colors";



const PageContainer = styles.div`


    position: fixed;
    overflow-y: scroll;
    height: 100%;
    top:0;
    left:0;
    width:100%;
    background-color:${middark};
    margin:0px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
       display:none;
     }

     @media (max-width: 768px) {
      width:100%;
    }
`;

const HomeContainerStyles = {
    
    paddingTop:"2vw",
    direction:"rtl",
};

const SubmitBtn = styles.button`
    background-color: #007ea7;
    display:inline;
    border:none;
    border-radius:80px;
    padding: 7px 40px;
    width:70%;
    color:${white};

    font-size:150%; 
    margin-top:20px;
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }

`;


export { PageContainer,HomeContainerStyles, SubmitBtn};
