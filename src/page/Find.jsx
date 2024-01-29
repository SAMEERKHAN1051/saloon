import FindSection from "./components/FInd_Components/Find_Section"
import data from "../json/data.json"
import { useState } from "react"
export default function Find() {

    const [saloon] = useState(data)

   
    const findSection = saloon.map((x) => <FindSection key={x.id} owner={x.owner_name}  address={x.address} exp={x.experience} name={x.name} img={x.img_url}/>)

    const option = saloon.map((x) => <option key={x.id} value={x.name}>{x.name}</option>)

    return (
        <div className="ServiceSection">
            <div className="spacing">
                <div className="service">
                    <select className="serviceSel" name="" id="">
                        <option value="Select Area">Select Area</option>
                        {option}
                    </select>
                    <div className="input-field">
                        <i className="icons fa-solid fa-user"></i>
                        <input className="serviceInp" type="text" name="" id="" placeholder="Parlour Name" />
                    </div>
                    <button className="themeBtn serviceBtn"><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                </div>
                <br />
                <br />
                <br />
                <div className="HomeCard">
                    {findSection}
                </div>
            </div>
        </div>
    )
}