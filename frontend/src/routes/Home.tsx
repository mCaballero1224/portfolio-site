import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p className="text-center">This page is under construction. Please see the <Link to='/todo'>Todo</Link> page to see what's being worked on!</p>
    </>
  );
}
