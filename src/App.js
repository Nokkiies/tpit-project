import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container fluid>
      <Row className='row-1'>
        <Col>
          <Col className='col-white'>
            <p className='p-hd'>ATHLETS</p>
            <p>01 CONNECTION</p>
            <p>Connect with coaches directly, you can ping coaches to view profile.</p>
          </Col>
          <Col className='col-gray'>
            <p>02 COLLABORATION</p>
            <p>Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
          </Col>
          <Col className='col-purple'>
            <p>03 GROWTH</p>
            <p>Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc</p>
          </Col>
        </Col>
      </Row>
      <Row className='row-2'>
        <Col>
          <Col className='col-white'>
            <p className='p-hd'>PLAYERS</p>
            <p>01 CONNECTION</p>
            <p>Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.</p>
          </Col>
          <Col className='col-gray'>
            <p>02 COLLABORATION</p>
            <p>Work with recruiter to increase your chances of finding talented athlete.</p>
          </Col>
          <Col className='col-blue'>
            <p>03 GROWTH</p>
            <p>Save your time, recruit proper athlets for your team.</p>
          </Col>
        </Col>
      </Row >
    </Container>
  );
}

export default App;
