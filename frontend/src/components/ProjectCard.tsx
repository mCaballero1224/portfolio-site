import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, description, githubLink }) => {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body className="d-flex flex-column">
        <div className="mb-auto">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="mb-3">{description}</Card.Text>
        </div>
        <Button as="a" variant="dark" href={githubLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github project-card-icon"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

