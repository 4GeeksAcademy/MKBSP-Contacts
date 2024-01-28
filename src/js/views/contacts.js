import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import ContactList from "../component/contactList";
import DeleteAllButton from "../component/deleteAllButton";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
        actions.getContacts();
    }, []);

	return (
		<div className="container">
			<h1>You can see your contacts here!</h1>
			<Link to="/create-new-contact" className="btn btn-primary">Create a new Contact</Link>
			<DeleteAllButton></DeleteAllButton>
            <ContactList contacts={store.contacts} />

		</div>
	);
};

