import FindSection from "./components/FInd_Components/Find_Section"
export default function Find() {

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
    const findSection = saloon.map((x) => <FindSection key={x.id} city={x.city} exp={x.experience} name={x.name} state={x.state} />)

    const option = saloon.map((x) => <option key={x.id} value={x.name}><li className="option">{x.name}</li></option>)

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