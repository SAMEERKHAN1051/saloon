import { useState } from "react"
import data from "../../../json/work.json"
export default function ThirdSection() {

    const [workValue] = useState(data)


    const serviceBox = workValue.map((x) => <div className="serviceBox" key={x.id}>
        <p><i className={x.icon}></i></p>
        <h3>Step {x.id}</h3>
        <h5>{x.title}</h5>
    </div>)

    return (
        <section>
            <div>
                <h4>How It's Work</h4>
                <h1>Four Steps for Geting an Appointment &#9987; </h1>
                <p>Start your journey by exploring our wide range of salon and parlour services. From haircuts to facials, and nails to massages, we have it all.</p>
            </div>
            <div className="box">
                {serviceBox}
            </div>
        </section>
    )
}