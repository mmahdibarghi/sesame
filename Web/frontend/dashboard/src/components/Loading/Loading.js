import ReactLoading from "react-loading";

const Loading = ({ type, color = "#003459", size = 40 }) => (
  <ReactLoading type={type} color={color} height={size} width={size} />
);

export default Loading;
