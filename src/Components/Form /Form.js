import React from 'react';
import '../css/form.css'




export default class Form extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="contactForm">
                    <div className="formImage">
                        <div >
                            <h2>Contact Me</h2>
                            <hr  />
                            <br/>
                            <h3 >Email: anaruizrivera90@gmail.com</h3>
                            
                            
                        </div>
                    </div>
                    <form method="POST" action="https://formsubmit.co/anaruizrivera90@gmail.com">
                        <div className="contact-items">
                            <label for="name" id="name" name="name">First Name:</label>
                            <input type="text" name="name" placeholder="First Name..." />
                        </div>
                        <div class="contact-items">
                            <label for="lastname" id="lastname" name="lastname">Last name:</label>
                            <input type="text" name="lastname" placeholder="Last Name..." />
                        </div>
                        <div class="contact-items">
                            <label for="email" id="email" name="email">Email:</label>
                            <input type="email" name="email" placeholder="Email..." />
                        </div>
                        <div class="contact-items">
                            <label for="message" id="message" name="message">Leave a message for Ana.</label>
                            <textarea name="message" cols="30" rows="10" placeholder="Type a message"></textarea>
                        </div>
                        <button class="btn" type="submit">Submit</button>
                    </form>
                </section>



            </React.Fragment>
        )
    }
};