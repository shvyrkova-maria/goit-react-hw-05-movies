import Loader from 'react-loader-spinner';
import { LoaderContainer } from 'components/Spinner/Spinner.styled.js';

function Spinner() {
  return (
    <LoaderContainer>
      <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000}
      />
    </LoaderContainer>
  );
}

export default Spinner;
