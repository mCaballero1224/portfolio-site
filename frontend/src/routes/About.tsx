import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default function About() {
  return (
    <>
      <Container id="about-me">
        <Row className="left about-section">
          <Col>
            <h2>About Me</h2>
            <Image 
              src="https://placehold.co/300x200"
              alt="placeholder image"
            />
            <p>I began using computers back in the early 2000s when my parents got a Dell so that my mother could work through college online. Whenever they weren't using it, I'd find myself exploring the net more and more. I did makeovers for Facebook pages, got viruses on LimeWire, and played plenty of MMORPGs.</p>
            <p>These days, my focus has shifted to <strong>Networking</strong>, <strong>Cybersecurity</strong>, and <strong>Open Source Software</strong>. I'm currently working on building a <strong>network monitor</strong> application to keep track of VPSs and my home server. Additionally, I've been learning more about <strong>Linux</strong> the past few years, and have made it my main OS as of this year (i use arch btw).</p>
            <p>During my downtime, I enjoy journaling, video games, and attending a Brazillian Jiu Jitsu class.</p>
          </Col>
        </Row>
        <hr />
        <Row className="right about-section">
          <Col>
            <h2>Education</h2>
            <Image 
              src="https://placehold.co/300x200"
              alt="placeholder image"
            />
            <p>I completed an Associate's Degree with honors at my local community college in 2023, majoring in Computer Science. While working towards this degree, I dipped my toes into a number of disciplines, including business, philosophy, and physics. Engaging with these subjects really helped to broaden my perspectives and train critical thinking skills against real-world issues.</p>
            <p>I started university shortly after. So far, I've taken classes surrounding algorithms, data structures, low-level programming and computer architecture. Currently, I'm taking courses focused on Networking and Operating Systems.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
