import { WholeContainer } from "../Auth/Login/LoginStyles";
import Loading from "./Loading";
const LoadingContainer = () => {
  return (
    <WholeContainer>
      <Loading type="spin" />
    </WholeContainer>
  );
};

export default LoadingContainer;
