import styled from 'styled-components';

interface SpinnerProps {
  imageUrl: string;
}

function Spinner({ imageUrl }: SpinnerProps) {
  return <StyledSpinner src={imageUrl} alt="Loading..." />;
}

export default Spinner;

const StyledSpinner = styled.img`
  width: 100px;
  height: 100px;
`;
