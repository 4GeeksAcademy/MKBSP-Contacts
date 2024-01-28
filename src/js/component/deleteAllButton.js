import React, { useContext } from 'react';
import { ListGroup, Image, Button } from 'react-bootstrap';
import { Context } from '../store/appContext';


const DeleteAllButton = () => {
    const { actions } = useContext(Context);
    const handleDeleteAll = () => {
        actions.deleteAll()
            .then(() => actions.getContacts())
            .catch(error => console.error("Error during deletion:", error));
    };

    return (
        <div>
            <button variant="danger" className="mr-2" onClick={() => handleDeleteAll()} >Delete All Contacts</button>
        </div>
    );
}

export default DeleteAllButton