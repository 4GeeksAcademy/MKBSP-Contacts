import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contacts } from "./views/contacts";
import { CreateNewContactView } from "./views/createNewContactView";
import { EditContact } from "./views/editContactView";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Contacts />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/create-new-contact" element={<CreateNewContactView />} />
                        <Route path="/edit-contact/:contactId" element={<EditContact />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
