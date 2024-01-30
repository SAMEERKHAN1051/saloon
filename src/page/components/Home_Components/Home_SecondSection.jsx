import HomeCard from "./Home_Card"
export default function ServiceSection({ name, address, exp, owner, img }) {
    return (
        <HomeCard owner={owner} exp={exp} name={name} address={address} img={img} />
    )
}