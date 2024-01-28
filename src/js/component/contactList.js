import React, { useContext } from 'react';
import { ListGroup, Image, Button } from 'react-bootstrap'; 
import ContactCard from './contactCard'; 
import { Context } from '../store/appContext';



const ContactList = ({ contacts }) => {
    const handleDelete = (contactId) => {
        actions.deleteContact(contactId)
            .then(() => actions.getContacts())
            .catch(error => console.error("Error during deletion:", error));
    };

    const handleEdit = (contactId) => {
        actions.editContact(contactId)
            .then(() => actions.getContacts())
            .catch(error => console.error("Error during editing:", error));
    };

    const { store, actions} = useContext(Context);
    return (
        <ListGroup>
            {contacts.map(contact => (
                <ListGroup.Item key={contact.id}>
                    <ContactCard contact={contact} onDelete={handleDelete} /> 
                </ListGroup.Item>
            
            ))}
        </ListGroup>
    );
};

export default ContactList;