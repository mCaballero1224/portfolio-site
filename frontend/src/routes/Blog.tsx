import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <>
      <h1>Blog Page</h1>
      <p className="text-center">This page is under construction. Please see the <Link to='/todo'>Todo</Link> page to see what's being worked on!</p>
    </>
  );
}
