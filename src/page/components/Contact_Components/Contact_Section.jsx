import { useState } from "react";
import data from "../../../json/contact.json"


export default function ContactSection() {

console.log(data);

const [contactData] = useState(data)

    // const contactData = [
    //     {
    //         id: 1,
    //         icon: "bi bi-person-fill",
    //         text: "Our Location",
    //         address: "Karaci"
    //     },
    //     {
    //         id: 2,
    //         icon: "bi bi-person-fill",
    //         text: "Our Location",
    //         address: "Karaci"
    //     },
    //     {
    //         id: 3,
    //         icon: "bi bi-person-fill",
    //         text: "Our Location",
    //         address: "Karaci"
    //     }
    // ]
    const contact = contactData.map((x) => <div key={x.id} className="ServiceBox">
        <p><i className={x.icon}></i></p>
        <h2>{x.text}</h2>
        {x.address && <h5>{x.address}</h5>}
        {x.email && <h5>{x.email}</h5>}
        {x.number && <h5>{x.number}</h5>}
    </div>)
    return (
        <section>
            <div className="box">
                {contact}
            </div>
        </section>
    )
}