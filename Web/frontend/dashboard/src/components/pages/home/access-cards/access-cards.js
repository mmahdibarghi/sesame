import {
  AccessCardContainer,
  AccessCardImage,
  AccessCardText,
} from "./access-cards-style";
function AccessCard(props) {
  return (
    <AccessCardContainer color={props.color}>
      <AccessCardImage src={props.image}></AccessCardImage>
      <AccessCardText>{props.children}</AccessCardText>
    </AccessCardContainer>
  );
}

export default AccessCard;
