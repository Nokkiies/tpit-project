import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container fluid>
      <div className="pcTablet">
        <Row className="row-1">
          <Col className="img1">
            <div className="footballerImg"></div>
          </Col>
          <Col>
            <Col className="col-white block1">
              <span className="p-hd">ATHLETS</span>
              <div className="p-hd2">
                <table>
                  <tbody>
                    <tr>
                      <td className="td-no">
                        <div className="p-no purple">01</div>
                      </td>
                      <td>
                        <div className="p-text">CONNECTION</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="p-dt-black">
                Connect with coaches directly, you can ping coaches to view
                profile.
              </p>
            </Col>
            <Col className="col-gray block2">
              <div className="p-hd2">
                <table>
                  <tbody>
                    <tr>
                      <td className="td-no">
                        <div className="p-no purple">02</div>
                      </td>
                      <td>
                        <div className="p-text">COLLABORATION</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="p-dt-black">
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </p>
            </Col>
            <Col className="col-purple block3">
              <div className="p-hd2">
                <table>
                  <tbody>
                    <tr>
                      <td className="td-no">
                        <div className="p-no white">03</div>
                      </td>
                      <td>
                        <div className="p-text">GROWTH</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="p-dt-white">
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc
              </p>
            </Col>
          </Col>
        </Row>
        <Row className="row-2">
          <Col>
            <Col className="col-white block4">
              <span className="p-hd">PLAYERS</span>
              <div className="p-hd2">
                <table>
                  <tbody>
                    <tr>
                      <td className="td-no">
                        <div className="p-no purple">01</div>
                      </td>
                      <td>
                        <div className="p-text">CONNECTION</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="p-dt-black">
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </p>
            </Col>
            <Col className="col-gray block5">
              <div className="p-hd2">
                <table>
                  <tbody>
                    <tr>
                      <td className="td-no">
                        <div className="p-no purple">02</div>
                      </td>
                      <td>
                        <div className="p-text">COLLABORATION</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="p-dt-black">
                Work with recruiter to increase your chances of finding talented
                athlete.
              </p>
            </Col>
            <Col className="col-blue block6">
              <div className="p-hd2">
                <table>
                  <tbody>
                    <tr>
                      <td className="td-no">
                        <div className="p-no white text-purple">03</div>
                      </td>
                      <td>
                        <div className="p-text">GROWTH</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="p-dt-white">
                Save your time, recruit proper athlets for your team.
              </p>
            </Col>
          </Col>
          <Col className="img2">
            <div className="basketballImg"></div>
          </Col>
        </Row>
      </div>

      <div className="mobile">
        <Row className="row-athlets">
          <Col>
            <span className="p-hd">ATHLETS</span>
          </Col>
          <Col>
            <div className="athlets">
              <s id="s1-athlets"></s>
              <s id="s2-athlets"></s>
              <s id="s3-athlets"></s>

              <div className="slider">
                <div className="col-gray block1">
                  <div className="p-hd2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="td-no">
                            <div className="p-no purple">01</div>
                          </td>
                          <td>
                            <div className="p-text">CONNECTION</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="p-dt-black">
                    Connect with coaches directly, you can ping coaches to view
                    profile.
                  </p>
                </div>
                <div className="col-gray block2">
                  <div className="p-hd2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="td-no">
                            <div className="p-no purple">02</div>
                          </td>
                          <td>
                            <div className="p-text">COLLABORATION</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="p-dt-black">
                    Work with other student athletes to increase visability.
                    When you share and like other players videos it will
                    increase your visability as a player. This is the team work
                    aspect to Surface 1.
                  </p>
                </div>
                <div className="col-gray block3">
                  <div className="p-hd2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="td-no">
                            <div className="p-no purple">03</div>
                          </td>
                          <td>
                            <div className="p-text">GROWTH</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="p-dt-black">
                    Resources and tools for you to get better as a student
                    Athelte. Access to training classes, tutor sessions, etc
                  </p>
                </div>
              </div>

              <div className="bullets">
                <a href="#s1-athlets"> </a>
                <a href="#s2-athlets"> </a>
                <a href="#s3-athlets"> </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="img1">
              <div className="footballerImg"></div>
            </div>
          </Col>
        </Row>
        <Row className="row-players">
          <Col className="players">
            <span className="p-hd">PLAYERS</span>
          </Col>
          <Col>
            <div className="players">
              <s id="s1-players"></s>
              <s id="s2-players"></s>
              <s id="s3-players"></s>

              <div className="slider">
                <div className="col-gray block1">
                  <div className="p-hd2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="td-no">
                            <div className="p-no purple">01</div>
                          </td>
                          <td>
                            <div className="p-text">CONNECTION</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="p-dt-black">
                    Connect with talented athlete directly, you can watch their
                    skills through video showreels directly from Surface 1.
                  </p>
                </div>
                <div className="col-gray block2">
                  <div className="p-hd2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="td-no">
                            <div className="p-no purple">02</div>
                          </td>
                          <td>
                            <div className="p-text">COLLABORATION</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="p-dt-black">
                    Work with recruiter to increase your chances of finding
                    talented athlete.
                  </p>
                </div>
                <div className="col-gray block3">
                  <div className="p-hd2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="td-no">
                            <div className="p-no purple">03</div>
                          </td>
                          <td>
                            <div className="p-text">GROWTH</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="p-dt-black">
                    Save your time, recruit proper athlets for your team.
                  </p>
                </div>
              </div>

              <div className="bullets">
                <a href="#s1-players"> </a>
                <a href="#s2-players"> </a>
                <a href="#s3-players"> </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="img2">
              <div className="basketballImg"></div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
