import styled from "styled-components"
import { darkred, white } from "../../../../colors";

export const CardContainer = styled.div`
    padding: 20px;
    margin: 10px auto;
    background-color: ${darkred};
    border-radius: 10px;
`;

export const BuyButton = styled.button`
    background-color: #007ea7;
    display:inline;
    border:none;
    border-radius:80px;
    padding: 7px 10px;
    width:70%;
    color:${white};

    font-size:100%; 
    margin-top:20px;
    transition: 0.5s ease-in-out;
    &:hover{
        transform: scale(1.07);
        transition: 0.5s ease-out;
    }

`;;

export const BuyContainer = styled.div`
    display: flex;
    justify-content: center;
`;