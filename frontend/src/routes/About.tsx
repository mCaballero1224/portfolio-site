import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <p className="text-center">This page is under construction. Please see the <Link to='/todo'>Todo</Link> page to see what's being worked on!</p>
    </>
  );
}
