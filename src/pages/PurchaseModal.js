import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PurchaseModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Start New Mining</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Plan Title</Form.Label>
            <Form.Control type="text" placeholder="Plan Title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Plan Price</Form.Label>
            <Form.Control type="text" placeholder="$0.00" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Payment System</Form.Label>
            <Form.Select>
              <option>Select one</option>
              <option>From Balance</option>
              <option>Direct Payment</option>
            </Form.Select>
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PurchaseModal;
