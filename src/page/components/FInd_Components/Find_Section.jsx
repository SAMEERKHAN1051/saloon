import HomeCard from "../Home_Components/Home_Card"
export default function AboutSection( {name, address, exp, owner , img} ) {
    return (
        <HomeCard address={address} owner={owner} name={name} exp={exp} img={img} />
    )
}