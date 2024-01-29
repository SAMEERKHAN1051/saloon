import ServiceSection from "./components/Service_Components/Service_Section"
export default function Service() {

    const service = [
        {
            "id": 1,
            "icon": "fa fa-cut",
            "title": "Haircut",
            "short_title": "Haircut & Styling"
        },
        {
            "id": 2,
            "icon": "fa fa-paint-brush",
            "title": "Coloring",
            "short_title": "Hair Coloring"
        },
        {
            "id": 3,
            "icon": "fa-solid fa-hand",
            "title": "Mani/Pedi",
            "short_title": "Manicure & Pedicure"
        },
        {
            "id": 4,
            "icon": "fa-solid fa-face-smile",
            "title": "Facial",
            "short_title": "Facial Treatments"
        }
    ]

    const ServiceBox = service.map((x) => <ServiceSection key={x.id} dicrption={x.short_title} icon={x.icon} title={x.title} />)
    return (
        <div className="ServiceSection">
            <div className="spacing">
                <div>
                    <h4>Service Item</h4>
                    <h2>Celebrate Your Beauty Journey: Explore Our Array of Services &#9987; </h2>
                    <p>Start your journey by exploring our wide range of salon and parlour services. From haircuts to facials, and nails to massages, we have it all.</p>
                </div>
                <div className="box">
                    {ServiceBox}
                </div>
            </div>
        </div>
    )
}