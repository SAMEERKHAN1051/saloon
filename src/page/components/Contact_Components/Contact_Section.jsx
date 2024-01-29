export default function ContactSection() {
    const contactData = [
        {
            id: 1,
            icon: "bi bi-person-fill",
            text: "Our Location",
            address: "Karaci"
        },
        {
            id: 2,
            icon: "bi bi-person-fill",
            text: "Our Location",
            address: "Karaci"
        },
        {
            id: 3,
            icon: "bi bi-person-fill",
            text: "Our Location",
            address: "Karaci"
        }
    ]
    const contact = contactData.map((x) => <div key={x.id} className="ServiceBox">
        <p><i className={x.icon}></i></p>
        <h2>{x.text}</h2>
        <h5>{x.address}</h5>
    </div>)
    return (
        <section>
            <div className="box">
                {contact}
            </div>
        </section>
    )
}