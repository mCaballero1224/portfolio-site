import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Netmonitor (Under Construction)',
    imageUrl: 'https://placehold.co/300x150',
    description: 'A Python application that monitors services based on user configuration.',
    githubLink: 'https://github.com/mCaballero1224/netmonitor',
  },
  {
    title: 'Big Shell (Under Construction)',
    imageUrl: 'https://placehold.co/300x150',
    description: 'A simple shell application; makes use of standard C libraries and POSIX standards.',
    githubLink: 'https://github.com/mCaballero1224/big-shell',
  },
  {
    title: 'DataVisor (Under Construction)',
    imageUrl: 'https://placehold.co/300x150',
    description: 'A dashboard for managing an SQL database using React as a frontend.',
    githubLink: 'https://github.com/mCaballero1224/datavisor',
  },
  {
    title: 'The Open SSH (Under Construction)',
    imageUrl: 'https://placehold.co/300x150',
    description: 'A chat app that makes use of SSH.',
    githubLink: 'https://github.com/mCaballero1224/the-open-ssh',
  },
];

const ProjectPage: React.FC = () => {
  return (
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} className="mb-4">
            <ProjectCard
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              githubLink={project.githubLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectPage;
