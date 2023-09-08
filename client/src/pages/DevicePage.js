import React, { useEffect, useState } from "react";
import { Container, Col, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getOneDevice } from "../http/deviceApi";

const DevicePage = () => {
  const { id } = useParams();
  const [device, setDevice] = useState({ info: [] });

  useEffect(() => {
    getOneDevice(id).then((data) => setDevice(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container mt={4}>
      <Col md={4}>
        <Image
          width={300}
          height={300}
          src={process.env.REACT_APP_API_URL + device.img}
        />
      </Col>
      <Col md={4}>{device.name}</Col>
      <Col md={4}>{device.price}</Col>
      <Button>Add to basket</Button>
    </Container>
  );
};

export default DevicePage;
