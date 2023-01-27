import { Tab, Tabs } from "react-bootstrap";
import styles from "styled-components";
import { darkred, white, midblue, lightred, lightblue,middark } from "../../colors";

export const NewServiceContainer = styles.div`
  width:100%;
  background-color:${middark};
  border-radius:25px;
  margin-top:50px;
  direction:rtl;
  font-family:"Dana";
  padding: 20px;
  border:1px solid gray;
  color:${white};  
`;

export const CustomizedTabs = styles(Tabs)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-bottom: none;
    width: 100%;

    .nav-item {
        button {
            background: ${darkred};
            color: ${white}
        }

        &:first-child {
            button {
                border-radius: 0px 20px 20px 0px;
            }
        }
        &:last-child {
            button {
                border-radius: 20px 0px 0px 20px;
            }
        }
    }
`;