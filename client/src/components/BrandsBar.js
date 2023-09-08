import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";

const BrandsBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row xs={2} md={6} lg={6}>
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          onClick={() => device.setSelectedBrand(brand)}
          className="p-3"
          border={brand.id === device.selectedBrand.id ? "danger" : "ligth"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandsBar;
