import { 
  useNavigate,
  isRouteErrorResponse,
  useRouteError 
} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div 
      style={{ textAlign: 'center', margin: 'auto' }}
    >
      <h1>Whoopsie doodle!</h1>
      <p>Looks like you ran into an error. Sorry 'bout that!</p>
      <p
        style={{
          backgroundColor: '#3B3045',
          padding: '1% 2%',
          borderRadius: '10px',
          color: '#FFFF00'
        }}
      >{error.data}</p>
      <Button onClick={() => navigate(-1)}>&larr; Go back</Button>
    </div>
  );
}
