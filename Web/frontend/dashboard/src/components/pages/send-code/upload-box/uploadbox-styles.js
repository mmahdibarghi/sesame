import styles from "styled-components";
import { darkred, white, midblue, lightred, lightblue } from "../../../colors";

const UploadBoxContainter = styles.div`
    width:100%;
    border-radius:25px;
    text-align:center;
    padding:50px;
    font-family:"Dana";
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='37' ry='37' stroke='%23D30C7C' stroke-width='7' stroke-dasharray='14%2c 50' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 37px;
`;
const UploadBoxContainterLoading = styles.div`
    width:100%;
    border-radius:25px;
    text-align:center;
    padding:50px;
    font-family:"Dana";
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='37' ry='37' stroke='%23D30C7C' stroke-width='7' stroke-dasharray='14%2c 50' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 37px;
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
`;
const UploadBoxIcon = styles.i`

    color:${white};
    padding:20px;
    background-color:rgba(211, 12, 124, 0.5);
    border-radius:140px;
    width:80px;
    height:80px;
    @media (max-width: 800px) {
        display:none;
      }
    border:2px ${darkred} solid;
`;

const UploadBoxButton = styles.button`
    background-color: ${darkred};
    display:inline;
    border:none;
    border-radius:15px;
    padding: 7px 40px;
    color:${white};
    font-size:2em; 
    margin-top:70px;
    transition: 0.5s ease-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
      }
      

`;

const UploadBoxText = styles.p`
    color:${darkred};
    padding-top:40px;
    font-size:30px;
    @media (max-width: 800px) {
        display:none;
      }
`;

export {
	UploadBoxContainter,
	UploadBoxContainterLoading,
	UploadBoxIcon,
	UploadBoxText,
	UploadBoxButton,
};
