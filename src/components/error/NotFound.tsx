import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src="/error.jpg" alt="error" />
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFound;
