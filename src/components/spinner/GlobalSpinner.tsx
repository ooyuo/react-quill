import { useSpinner } from '@/context/spinner/SpinnerContext';
import Spinner from './Spinner';
import styled from 'styled-components';

function GlobalSpinner() {
  const { spinnerImage } = useSpinner();
  return (
    <Overlay>
      <Spinner imageUrl={spinnerImage} />
    </Overlay>
  );
}

export default GlobalSpinner;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1000;
`;
