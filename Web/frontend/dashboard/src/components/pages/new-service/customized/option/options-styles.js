import styled from "styled-components";
import { darkred, white } from "../../../../colors";

export const Button = styled.button(({active})=>({
    padding: '10px',
    backgroundColor: active? darkred : white,
    border: `1px solid ${darkred}`,
    color: active? white: '#495057',
    '&:first-child': {
        borderRadius: '0px 20px 20px 0'
    },
    '&:last-child': {
        borderRadius: '20px 0px 0px 20px'
    },
    transition: 'all 0.5s ease'
}));