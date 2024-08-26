import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

export default function Todo() {
  return (
    <>
      <h1>Site Todo List</h1>
      <Accordion defaultActiveKey="1" className="todo-list">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Building the Site<Badge bg="success" className="in-progress-badge">Complete!</Badge></Accordion.Header>
          <Accordion.Body>
            <ul>
              <li className="todo-done">Create basic pages</li>
              <li className="todo-done">Implement routing</li>
              <li className="todo-done">Add basic/placeholder content</li>
              <li className="todo-done">Deploy the site</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Contact Form<Badge bg="warning" className="in-progress-badge">In Progress</Badge></Accordion.Header>
          <Accordion.Body>
            <ul>
              <li className="todo-done">Design form and fieldsets</li>
              <li>Handle form submission</li>
              <li>Implement email subscription via nodemailer</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Adding Content<Badge bg="warning" className="in-progress-badge">In Progress</Badge></Accordion.Header>
          <Accordion.Body>
            <ul>
              <li className="todo-done">Decide on projects to showcase</li>
              <li>Implement git server + frontend</li>
              <li>Host chat app</li>
              <li>Create and display terminal emulator on home page</li>
              <li>Self-host a blog</li>
              <li>Self-host videos for users to view</li>
              <li>Link to other cool sites I find</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Site Maintenance<Badge bg="warning" className="in-progress-badge">In Progress</Badge></Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Create one blog/vlog per week</li>
              <li>Add a new project monthly</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
