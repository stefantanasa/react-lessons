import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/counter";

function App() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h1>This is text is from the app</h1>
          <Counter />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
