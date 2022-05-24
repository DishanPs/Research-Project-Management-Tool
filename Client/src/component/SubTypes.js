import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DateButton from './DateButton'

const SubTypes = () => {
    
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Create Submission Types</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Group className="mb-3">
                <Form.Label>Submission link name</Form.Label>
                <Form.Control placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Submission Types</Form.Label>
                <Form.Select>
                    <option value="" selected disabled hidden>Select</option>
                    <option>Topic Assessment form</option>
                    <option>Proposal Document</option>
                    <option>Presentation slides</option>
                    <option>Final Thesis</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Due Date and Time</Form.Label>
                <DateButton/>
            </Form.Group>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default SubTypes
