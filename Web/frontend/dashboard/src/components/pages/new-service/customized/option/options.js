import { Button } from "./options-styles";

const Option = ({ label, value, onClick, active})=>{
    return <Button onClick={()=>onClick(value)} active={active}>
        {label}
    </Button>
}

export default Option;