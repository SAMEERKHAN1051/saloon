import { useState } from "react";
import ContactSection from "./components/Contact_Components/Contact_Section"

const color = {
    color: "#cca876"
}

export default function Contact() {
    const [formInput, setFormInput] = useState({
        Name: "",
        email: "",
        message: ""
    })

    function formValue(event) {
        const { name, value } = event.target

        setFormInput(prevInputValue => {
            return {
                ...prevInputValue,
                [name]: value
            }
        })
    }
    function formSubmit(event){

        event.preventDefault()
        console.log(formInput);
    }

    return (
        <div className="ServiceSection">
            <div className="spacing">
                <div className="text-center" style={color}>
                    <h1>Request a Contact us</h1>

                </div>
                <ContactSection />
                <div className="contactSection">
                    <div className="imgSection">
                        <img className="contactImage" src="https://images.unsplash.com/photo-1557804506-d8017c1e4856?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <br />
                    <div className="form" onClick={formSubmit}>
                        <h3>Feel Free To Get In Touch With Us</h3>
                        <form >
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <label htmlFor="Name">Name <span style={color}>*</span></label>
                                        <input
                                            type="text"
                                            name="Name"
                                            id=""
                                            onChange={formValue}
                                            value={formInput.Name}
                                            required />
                                    </div>
                                    <div className="row">
                                        <label htmlFor="email">Email <span style={color}>*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            id=""
                                            onChange={formValue}
                                            value={formInput.email}
                                            required />
                                    </div>
                                    <br />
                                </div>
                                <label htmlFor="Name">Leave A Messeage For Us <span style={color}>*</span></label>
                                <textarea
                                    onChange={formValue}
                                    name="message"
                                    value={formInput.message}
                                    id=""
                                    cols="30"
                                    rows="10"
                                    required
                                ></textarea>
                            </div>
                            <br />
                            <button type="submit" className="themeBtn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}