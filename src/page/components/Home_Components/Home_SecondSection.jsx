import HomeCard from "./Home_Card"
export default function ServiceSection({ name, state, exp, city }) {
    return (
                <HomeCard city={city} exp={exp} name={name} state={state} />
    )
}