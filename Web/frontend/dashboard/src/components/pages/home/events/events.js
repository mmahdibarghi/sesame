import { useState } from "react";
import {
  EventsContainer,
  DropDownButton,
  DropDown,
  DropDownContent,
  EventsItem,
  EventsList,
  CalendarIcon,
  EventsText,
} from "./events-styles";
import { CalendarEvent, ChevronDown } from "react-bootstrap-icons";
import { darkred, lightblue, yellow } from "../../../colors";

function Events() {
  const [select, setSelect] = useState("امروز");
  const [showDropDown, setShowDropDown] = useState(false);
  const handleDropDownButtonClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleDropDownContentClicked = (value) => {
    setSelect(value);
    setShowDropDown(!showDropDown);
  };
  return (
    <EventsContainer>
      <EventsText>رویداد ها</EventsText>
      <DropDown>
        <DropDownButton onClick={handleDropDownButtonClick}>
          {select}
          <span style={{ float: "left" }}>
            <ChevronDown />
          </span>
        </DropDownButton>
        <DropDownContent show={showDropDown}>
          <a
            onClick={() => {
              handleDropDownContentClicked("امروز");
            }}
          >
            امروز
          </a>
          <a
            onClick={() => {
              handleDropDownContentClicked("یک هفته آینده");
            }}
          >
            یک هفته آینده
          </a>
          <a
            onClick={() => {
              handleDropDownContentClicked("یک ماه آینده");
            }}
          >
            یک ماه آینده
          </a>
        </DropDownContent>
      </DropDown>
      <br />
      <EventsList>
        <EventsItem>
          <CalendarIcon color={darkred}>
            <CalendarEvent size={20} />
          </CalendarIcon>
          رویداد اول
        </EventsItem>
        <EventsItem>
          <CalendarIcon color={yellow}>
            <CalendarEvent size={20} />
          </CalendarIcon>
          رویداد اول
        </EventsItem>
        <EventsItem>
          <CalendarIcon color={lightblue}>
            <CalendarEvent size={20} />
          </CalendarIcon>
          رویداد اول
        </EventsItem>
      </EventsList>
    </EventsContainer>
  );
}

export default Events;
