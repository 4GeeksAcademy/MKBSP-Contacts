import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import CreateNewContact from "../component/createContact";

export const CreateNewContactView = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <CreateNewContact />
		</div>
	);
};