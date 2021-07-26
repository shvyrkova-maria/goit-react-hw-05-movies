import Loader from 'react-loader-spinner';
import { LoaderContainer } from 'components/Spinner/Spinner.styled';

function Spinner() {
  return (
    <LoaderContainer>
      <Loader
        type="BallTriangle"
        color="var(--accent-color)"
        height={120}
        width={120}
        timeout={5000}
      />
    </LoaderContainer>
  );
}

export default Spinner;
