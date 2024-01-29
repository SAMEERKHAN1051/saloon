export default function HomeCard({ name, state, exp, city }) {
    return (
        <div className="themeCard">
            <img className="cardImage" src="https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="cardText">
                <h3 className="cardTitle">{name}</h3>
                <p className="cartText">{state}</p>
                <p className="cartText">{exp}</p>
                <p className="cartText">{city}</p>
                <button className="themeBtn cardBtn">Get Service</button>
            </div>
        </div>
    )
}