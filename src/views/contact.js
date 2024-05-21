import React, { useState } from "react";

import ContactForm from "../components/contact/contact.form";

export default function ContactMe() {
    return (
        <div id="my-contact" className="container text-center my-5">
            <h1 id="contact" className={"mb-3 wow fadeInLeft"}>
                Контакты
            </h1>
            <ContactForm />
		</div>
    )
}