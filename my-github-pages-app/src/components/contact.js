import React from "react";

const Contacts = ({handleNavClick,activeSection}) => {
    return (

        <section id='contact' style={{ display: activeSection === 'contact' ? 'block' : 'none' }}>
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me through any of the following methods.</p>
            <div className='contact-info'>
                <h2>Contact Information</h2>
                <p><strong>Email: </strong> <a href='mailto:a.vicenciodelmoral@gmail.com'>a.vicenciodelmoral@gmail.com</a></p>
                <p><strong>LinkedIn: </strong><a href='https://www.linkedin.com/in/abdi-vicenciodelmoral/'>linkedin.com/in/abdi-vicenciodelmoral/</a></p>
            </div>

            <div className="contact-info">
                <h2>Developer Communities</h2>
                <p><strong>GitHub:</strong> <a href="https://github.com/AbdiVicenciodelmoral">github.com/AbdiVicenciodelmoral</a></p>
            </div>
        </section>
    );
};

export default Contacts;