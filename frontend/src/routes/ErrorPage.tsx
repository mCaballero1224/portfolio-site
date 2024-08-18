import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Whoospie Doodle!</h1>
      <p>Sorry 'bout that. Looks like you ran into an error.</p>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
    </div>
  );
}
