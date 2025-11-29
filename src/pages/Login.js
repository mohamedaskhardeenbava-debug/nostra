import { Container, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center py-5 px-sm-1 px-lg-2 px-xl-5">
      <Card style={{ width: "25rem" }} className="p-4 shadow">
        <h3 className="text-center text-primary mb-3">Login</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
