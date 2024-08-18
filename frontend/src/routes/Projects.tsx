import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/ProjectCard';
import { cardData } from '../data/projectData';

export default function Projects() {

  return (
    <>
      <Container>
        <Row>
          {cardData.map(card => (
            <Col>
              <ProjectCard key={card.id} title={card.title} description={card.description} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
