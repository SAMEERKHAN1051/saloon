import { Link } from "react-router-dom";
import data from '../../../json/blog.json'
import { useState } from "react";

export default function BlogSection() {
    const card = data.map((x) => <div key={x.id} className="BlogCard">
        <img src={x.img} className="blogImg" alt="..." />
        <div className="body">
            <h4 className="title">{x.title}</h4>
            <p className="text">{x.description}</p>
            <Link href="#">
                <button className="themeBtn blogBtn">Go somewhere</button>
            </Link>
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