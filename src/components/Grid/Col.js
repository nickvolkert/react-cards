import React from "react";

export const Col = ({ size, children }) => (
  <Col className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </Col>
);
