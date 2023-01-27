import { useEffect, useState } from "react";
import { Container } from "./select-styles";
import Option from "../option/options";
const GroupSelect = ({ value, onChange, options }) => {
    console.log(value, options)
    return <Container>
        {options.map((option)=> (<Option 
                {...option} 
                active={option.value === value}
                onClick={()=>onChange(option.value)}
                >
            </Option>))
        }
    </Container>
}

export default GroupSelect;