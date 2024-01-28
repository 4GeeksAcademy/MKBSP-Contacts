import { ListGroup, Image, Button } from 'react-bootstrap';
import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import { Context } from '../store/appContext';


const EditContactForm = () => {
    const { contactId } = useParams();
    const { actions } = useContext(Context);
    const [message, setMessage] = useState({ text: '', type: '' });
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            full_name: event.target.full_name.value,
            email: event.target.email.value,
            agenda_slug: 'MKBSP',
            phone: event.target.phone.value,
            address: event.target.address.value
        };
        actions.editContact(contactId, editedContact)
            .then(response => {
                if (response.ok) {
                    setMessage({ text: 'contact edited successfully', type: 'success' });
                    formRef.current.reset();
                } else {
                    return response.json().then(json => Promise.reject(json));
                }
            })
            .catch((errorResponse) => {
                const errorMessage = errorResponse.message || 'Failed to edit contact';
                setMessage({ text: errorMessage, type: 'error' });
            });
    }
    return (
        <div className='Container'>
            <div>
                <h1>Edit your Contact here!</h1>
                <h2>Contact ID {contactId}</h2> 
            </div>
            <form ref={formRef} className="m-3 p-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="full_name" className="form-label">Full Name</label>
                    <input type="full_name" className="form-control" id="full_name"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="phone"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="address" className="form-control" id="address"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <h2 style={{ color: message.type === 'success' ? 'green' : 'red' }}>
                {message.text}
            </h2>
            <Link to="/contacts" className="btn btn-secondary">Back to Contacts</Link>

        </div>
    );
}


export default EditContactForm