import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <h2>Page Not Found</h2>
      <Link to="/">Back to Home</Link>
    </>
  );
}