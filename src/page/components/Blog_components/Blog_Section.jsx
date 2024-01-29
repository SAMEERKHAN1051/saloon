import { Link } from "react-router-dom";

export default function BlogSection() {

    const imgData = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Card title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Card title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Card title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Card title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Card title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
    ]
    const card = imgData.map((x) => <div key={x.id} className="BlogCard">
        <img src={x.img} className="blogImg" alt="..." />
        <div className="body">
            <h4 className="title">{x.title}</h4>
            <p className="text">{x.description}</p>
            <Link href="#" className="btn blogBtn">Go somewhere</Link>
        </div>
    </div>)
    return (
        <section>
            <div>
                <h4>Web Journal</h4>
                <h2>Bloom with eSalon &#9987; </h2>
                <p>Your Beauty & Lifestyle Hub</p>
            </div>
            <br />
            <br />
            <div className="cardBlog">
                {card}
            </div>
        </section>
    )
}