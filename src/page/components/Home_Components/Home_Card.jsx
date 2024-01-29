export default function HomeCard({ name, address, exp, owner , img }) {
    return (
        <div className="themeCard">
            <div className="cardImageDiv">
                <img className="cardImage img-fluid" src={img} alt="" />
            </div>
            <div className="cardText">
                <h3 className="cardTitle">{name}</h3>
                <p className="cartText">{owner}</p>
                <p className="cartText">{exp}</p>
                <p className="cartText">{address}</p>
                <button className="themeBtn cardBtn">Get Service</button>
            </div>
        </div>
    )
}