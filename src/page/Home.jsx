
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
    const saloon = [
        {
            "id": 1,
            "name": "Glamour Cuts",
            "state": "California",
            "city": "Los Angeles",
            "experience": "10 years",
            "img_url": "glamour_cuts.jpg"
        },
        {
            "id": 2,
            "name": "Style Haven",
            "state": "New York",
            "city": "New York City",
            "experience": "8 years",
            "img_url": "style_haven.jpg"
        },
        {
            "id": 3,
            "name": "Chic Trends",
            "state": "Texas",
            "city": "Houston",
            "experience": "5 years",
            "img_url": "chic_trends.jpg"
        },
        {
            "id": 4,
            "name": "Elegance Studio",
            "state": "Florida",
            "city": "Miami",
            "experience": "12 years",
            "img_url": "elegance_studio.jpg"
        },
        {
            "id": 5,
            "name": "Cutting Edge",
            "state": "Illinois",
            "city": "Chicago",
            "experience": "15 years",
            "img_url": "cutting_edge.jpg"
        },
        {
            "id": 6,
            "name": "Beauty Lounge",
            "state": "Georgia",
            "city": "Atlanta",
            "experience": "9 years",
            "img_url": "beauty_lounge.jpg"
        },
        {
            "id": 7,
            "name": "Hair Harmony",
            "state": "Ohio",
            "city": "Columbus",
            "experience": "7 years",
            "img_url": "hair_harmony.jpg"
        },
        {
            "id": 8,
            "name": "Trendy Salon",
            "state": "Washington",
            "city": "Seattle",
            "experience": "11 years",
            "img_url": "trendy_salon.jpg"
        },
        {
            "id": 9,
            "name": "The Classic Cut",
            "state": "Massachusetts",
            "city": "Boston",
            "experience": "13 years",
            "img_url": "classic_cut.jpg"
        },
        {
            "id": 10,
            "name": "Urban Chic",
            "state": "Colorado",
            "city": "Denver",
            "experience": "6 years",
            "img_url": "urban_chic.jpg"
        }
    ]
    const onlyForSaloon = saloon.slice(0, 4)
    const findSection = onlyForSaloon.map((x) => <ServiceSection key={x.id} city={x.city} exp={x.experience} name={x.name} state={x.state} />)
    const option = saloon.map((x) => <option key={x.id} value={x.state}>{x.state}</option>)
    return (
        <div>
            <Carousel />
            <div className="ServiceSection">
                <form onClick={searchBtn} >
                    <div className="service">
                        <select
                            className="serviceSel"
                            name="state"
                            onChange={serviceInput}
                            value={saloonInfo.state}
                        >
                            <option
                                value="Select Area"
                            >Select Area</option>
                            {option}
                        </select>
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
                    </div>
                </form>
                <div className="HomeCard">
                    {findSection}
                </div>
                <ThirdSection />
                <ForthSection />
                <FifthSection />
                <CollegeSection />
            </div>
        </div >
    )
}