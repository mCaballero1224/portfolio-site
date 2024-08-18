import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function ProjectCard({ title, description }: CardData) {
  return (
    <Card style={{ width: '18rem' }} className="project-card">
      <Card.Img variant="top" src="https://placehold.co/180x100" />
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="dark"><i className="fab fa-github project-card-icon"></i></Button>
    </Card>
  );
}
