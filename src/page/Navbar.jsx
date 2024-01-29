import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const link = [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "Find",
            path: "/find"
        },
        {
            id: 3,
            title: "About",
            path: "/about"
        },
        {
            id: 4,
            title: "Service",
            path: "/service"
        },
        {
            id: 5,
            title: "Blog",
            path: "/blog"
        },
        {
            id: 6,
            title: "Contact",
            path: "/contact"
        }
    ];

    const style = {
        borderBottom: "2px solid",
        color: "#cca876"
    };
    const navStyle = {
        backgroundColor: "#0f1c2a",
        margin: "0 -10px",
        borderRadius: "24px",
        padding: "16px"
    }
    const linkObj = link.map(x => (
        <li key={x.id} className={"nav-item ps-3"}>
            <NavLink className={({ isActive }) => isActive ? "fs-6 nav-link active" : "nav-link fs-6"} key={x.id} to={x.path}
                style={({ isActive }) => isActive ? style : null}
            >{x.title} &#9987;</NavLink>
        </li>)
    );

    return (
        <nav className="navbar navbar-expand-lg nav sticky-top">
            <div className="container-fluid" >
                <Link to="/" className="navbar-brand mx-5 logo">
                    <img style={{ height: 75 }} src="assets/logo.png" alt="" />
                </Link>
                <button
                    className="navbar-toggler navBtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav" style={navStyle}>
                    <ul className="navbar-nav">
                        {linkObj}
                        <li className="nav-item">
                            <NavLink to = "/login">
                                <button className="themeBtn">Login in</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

