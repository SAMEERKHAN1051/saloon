import data from "../json/data.json"
import Carousel from "./components/Home_Components/Home_Carousel"
import ServiceSection from "./components/Home_Components/Home_SecondSection"
import ThirdSection from './components/Home_Components/Home-ThirdSection'
import ForthSection from './components/Home_Components/Home_ForthSection'
import FifthSection from './components/Home_Components/Home_FifthSection'
import CollegeSection from './components/Home_Components/Home_CollegeSection'
import { useState } from "react"
export default function Home() {

    const [saloonInfo, setSaloonInfo] = useState({
        state: "",
        parlour: ""
    })

    function searchBtn(event) {
        event.preventDefault()
        localStorage.setItem("Saloon", JSON.stringify(saloonInfo))
        console.log(saloonInfo);
    }
    function serviceInput(event) {
        const { value, name } = event.target
        setSaloonInfo(prevInfo => {
            return {
                ...prevInfo,
                [name]: value
            }
        })

    }
    const [saloon] = useState(data)
    const onlyForSaloon = saloon.slice(0, 4)
    const findSection = onlyForSaloon.map((x) => <ServiceSection key={x.id} owner={x.owner_name} exp={x.experience} name={x.name} address={x.address} img={x.img_url} />)
    const option = saloon.map((x) => <option key={x.id} value={x.state}>{x.state}</option>)
    return (
        <div>
            <Carousel />
            <div className="ServiceSection">
                <div className="formSection">
                    <form className="service" onClick={searchBtn} >
                        <div className="serviceSel">
                            <select
                                name="state"
                                onChange={serviceInput}
                                value={saloonInfo.state}
                            >
                                <option
                                    value="Select Area"
                                >Select Area</option>
                                {option}
                            </select>
                        </div>

                        <div className="input-field">
                            <i className="icons fa-solid fa-user"></i>
                            <input
                                className="serviceInp"
                                type="text"
                                name="parlour"
                                id=""
                                placeholder="Parlour Name"
                                value={saloonInfo.parlour}
                                onChange={serviceInput} />
                        </div>
                        <button className="themeBtn serviceBtn" ><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                    </form>
                    <div className="HomeCard">
                        {findSection}
                    </div>
                </div>
                <ThirdSection />
                <br />
            </div>
            <ForthSection />
            <div className="SecondServiceSection">
            <FifthSection />
            <CollegeSection />
            </div>
        </div >
    )
}