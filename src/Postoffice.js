import { useState } from "react";
import axios from "axios";
import { Button, Modal } from "bootstrap";

import React from "react";

// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// import {Button,Modal} from 'react-bootstrap';

function Postoffice() {
  const [pin, setpin] = useState(null);
  const [error, seterror] = useState("");
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlepinchange = (e) => {
    console.log(e.target);
    setpin(e.target.value);
    let value = e.target.value;
    value === ""
      ? seterror("pincode cannot be empty")
      : !Number(value)
      ? seterror("pincode must be a number format")
      : value.length < 6 || value.length > 6
      ? seterror("pin must be 6 digit")
      : seterror(null);
  };

  const handleSubmit = () => {
    setloading(true);
    axios
      .get(`https://api.postalpincode.in/pincode/${pin}`)
      .then((res) => res)
      .then((response) => {
        console.log("*", response);
        setdata(response.data[0].PostOffice);
        console.log(data);
        setloading(false);
      });
  };

  const handlecopy = () => {};
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>post office data</Modal.Title>
        </Modal.Header>
        <Modal.Body>click on modal. dynamic data is :{pin}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlecopy}>
            copy
          </Button>
          <Button variant="primary">yes</Button>
        </Modal.Footer>
      </Modal>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {/* <h1>{pin}</h1> */}
          <input type={"text"} value={pin} onChange={handlepinchange} />
          <div style={{ color: "red" }}>{error ? error : ""}</div>
          <button onClick={handleSubmit}>Submit</button>
          <table style={{ border: "1", textAlign: "center" }}>
            <thead>
              <tr>
                <th style={{ padding: "10px", margin: "10px" }}>Name</th>
                <th style={{ padding: "10px", margin: "10px" }}>Branch Type</th>
                <th style={{ padding: "10px", margin: "10px" }}>
                  Delivery status
                </th>
                <th style={{ padding: "10px", margin: "10px" }}>Circle</th>
                <th style={{ padding: "15px", margin: "10px" }}>Division</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => {
                return (
                  <tr>
                    <td style={{ padding: "5px" }}>{e.Name}</td>
                    <td>{e.BranchType}</td>
                    <td>{e.DeliveryStatus}</td>
                    <td>{e.Circle}</td>
                    <td>{e.Division}</td>
                    <td style={{ padding: "5px" }}>{e.Country}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <Button variant="primary" onClick={handleShow}>
        Click here to open modal
      </Button>
    </>
  );
}

export default Postoffice;
