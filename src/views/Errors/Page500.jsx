import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Page500 = () => {
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <span className="clearfix">
              <h1 className="float-left display-3 mr-4">500</h1>
              <h4 className="pt-3">Houston, we have a problem!</h4>
              <p className="text-muted float-left">
                The page you are looking for is temporarily unavailable.
              </p>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page500;
