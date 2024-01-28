import React, { useContext } from 'react';
import { ListGroup, Image, Button } from 'react-bootstrap';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const ContactCard = ({contact, onDelete, onEdit}) => {
    const { actions } = useContext(Context);

    return (
        <div className="row align-items-center">

            {/* Column 1: Picture */}
            <div className="col-md-2">
                <Image src={contact?.picture} roundedCircle />
            </div>
            
            {/* Column 2: Contact Info */}
            <div className="col-md-6">
                <div>Name: {contact?.full_name}</div>
                <div>Address: {contact?.address}</div>
                <div>Phone: {contact?.phone}</div>
                <div>Email: {contact?.email}</div>
            </div>
            
            {/* Column 3: Buttons */}
            <div className="col-md-4 d-flex justify-content-end">
                <Button variant="primary" className="mr-2" as={Link} to={`/edit-contact/${contact.id}`}>Edit</Button>
                <Button variant="danger" className="mr-2" onClick={() => onDelete(contact.id)}>Delete</Button>
            </div>

        </div>
    )
}

export default ContactCard;