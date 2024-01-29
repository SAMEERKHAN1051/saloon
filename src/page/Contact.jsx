import ContactSection from "./components/Contact_Components/Contact_Section"

const color = {
    color: "#cca876"
}

export default function Contact() {
    return (
        <div className="ServiceSection">
            <div className="spacing">
                <div className="text-center" style={color}>
                    <h1>Request a Contact us</h1>

                </div>
                <ContactSection />
                <div className="contactSection">
                    <div className="imgSection">
                        <img className="contactImage" src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <br />
                    <div className="form">
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
                                            required />
                                    </div>
                                    <div className="row">
                                        <label htmlFor="email">Email <span style={color}>*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            id=""
                                            required />
                                    </div>
                                    <br />
                                </div>
                                <label htmlFor="Name">Leave A Messeage For Us <span style={color}>*</span></label>
                                <textarea name="message" required id="" cols="30" rows="10"></textarea>
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