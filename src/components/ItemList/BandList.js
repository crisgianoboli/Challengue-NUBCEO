import React, { useEffect, useState, useContext } from "react";
/* import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap"; */
import "bootstrap/dist/css/bootstrap.min.css";
import AppContext from "../../contexts/AppContext/AppContext";

import "./Band.css";

function BandsList() {
  const { bands, getBands } = useContext(AppContext);

  useEffect(() => {
    getBands();
  }, []);

  return (
    <div className="list-group h-100">
      {bands.map((item) => (
        <p> {item.name} </p>
      ))}
    </div>
  );
}

export default BandsList;
