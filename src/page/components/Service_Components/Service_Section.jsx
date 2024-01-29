export default function ServiceSection({ icon, title, dicrption }) {
    return (
        <div className="ServiceBox">
            <span className="serviceicons"><i className={icon}></i></span>
            <h2>{title}</h2>
            <h5>{dicrption}</h5>
        </div>
    )
}