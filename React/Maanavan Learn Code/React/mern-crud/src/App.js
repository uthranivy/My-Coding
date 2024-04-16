import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Routes, Route, Link } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/editapp" className="nav-link">
                  Edit
                </Link>
                <Link to="/list" className="nav-link">
                  List
                </Link>
              </Nav>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<CreateEmployee />}></Route>
                  <Route path="/editapp" element={<EditEmployee />}></Route>
                  <Route path="/list" element={<EmployeeList />}></Route>
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
