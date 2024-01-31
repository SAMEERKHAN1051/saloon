import { useState } from "react"
import data from "../../../json/testimonal.json"
export default function ForthSection() {

    const [testimonial] = useState(data);

    const testimonal = testimonial.map(x => <div key={x.id} className="testimonalCard">
        <div className="cardMainContent">
            <div className="cardImage">
                <img src={x.image} alt="Placeholder Image2" />
            </div>
            <div className="testimonalCard-content">
                <div className="testimonalStar">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p>“{x.testimonial}”
                </p>
            </div>
        </div>
        <div className="cardUserContent">
            <h3>{x.name}</h3>
            <p>{x.occupation}</p>
        </div>
    </div>)
    console.log(testimonial);
    return (
        <div className="testimonal">
            {testimonal}
        </div>
    )
}