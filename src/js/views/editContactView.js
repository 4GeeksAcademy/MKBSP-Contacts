import React, { useContext } from 'react';
import { ListGroup, Image, Button } from 'react-bootstrap'; 
import { Context } from '../store/appContext';
import EditContactForm from '../component/editContactForm';
import { useParams } from 'react-router-dom';



export const EditContact = () => {
    const { id } = useParams();
    const { store, actions} = useContext(Context);
    return (
        <div className='container'>
            <EditContactForm contactId={id} />
        </div>

    );
}
