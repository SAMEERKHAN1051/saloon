import HomeCard from "../Home_Components/Home_Card"
export default function AboutSection( {name, state, exp,city} ) {
    return (
        <HomeCard state={state} city={city} name={name} exp={exp}p />
    )
}