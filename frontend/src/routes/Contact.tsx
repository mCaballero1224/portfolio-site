import { Form, Link } from 'react-router-dom'

export default function Contact() {
  const contact = {
    first: "John",
    last: "Doe",
    email: "john.doe@mail.com",
    message: "Drop your message here!"
  };

  return (
    <>
      <h1>Contact Page</h1>
      <p className="text-center">This page is under construction. Please see the <Link to='/todo'>Todo</Link> page to see what's being worked on!</p>
    </>
  );
}
