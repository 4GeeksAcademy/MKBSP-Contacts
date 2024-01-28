const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}

			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContacts: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/MKBSP')
					.then(response => {
						if (!response.ok && response.status === 404) {
							console.log("Contact does not exist...");
						} else {
							return response.json();
						}
					})
					.then(data => {
						if (data && Array.isArray(data)) {
							setStore({ contacts: data })
							console.log({ data })
						}
					})
					.catch(error => console.error("Error fetching tasks:", error));
			},
			submitNewContact: (newContact) => {
				const contactData = {
					...newContact,
					agenda_slug: "MKBSP",
				};

				return fetch('https://playground.4geeks.com/apis/fake/contact/', {
					method: "POST",
					body: JSON.stringify(contactData),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) {
							console.log("Contact created successfully");
							getActions().getContacts();
						} else {
							console.error("Failed to create contact:", response);
							throw new Error('Failed to create contact');
						}
					})
					.catch(error => {
						console.error("Error creating contact:", error);
						throw error;
					});
			},
			deleteContact: (contact_id) => {
				return fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) {
							console.log("Contact was deleted");
						} else {
							console.error("Failed to delete contact:", response);
							throw new Error('Failed to delete contact');
						}
					})
					.catch(error => {
						console.error("Error deleting contact:", error);
						throw error;
					});
			},
			deleteAll: () => {
				return fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/MKBSP`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) {
							console.log("Contact was deleted");
						} else {
							console.error("Failed to delete contact:", response);
							throw new Error('Failed to delete contact');
						}
					})
					.catch(error => {
						console.error("Error deleting contact:", error);
						throw error;
					});
			},

			editContact: (contact_id, contactData) => {
				if (!contact_id) {
					console.error("Contact ID is undefined");
					return;
				}
			
				return fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`, {
					method: "PUT",
					body: JSON.stringify(contactData),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(response => {
					if (response.ok) {
						console.log("Contact updated successfully");
					} else {
						console.error("Failed to update contact:", response);
						throw new Error('Failed to update contact');
					}
				})
				.catch(error => {
					console.error("Error updating contact:", error);
					throw error;
				});
			}
		}
	};
};

export default getState;
