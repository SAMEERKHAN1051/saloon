export default function ForthSection() {
    // const testimonalsData = [
    //     {
    //         "name": "John Doe",
    //         "profession": "Web Developer",
    //         "review": "John Doe provided exceptional service. His expertise in web development greatly contributed to the success of our project.",
    //         "image": "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //         "name": "Jane Smith",
    //         "profession": "Graphic Designer",
    //         "review": "Jane Smith's creative designs exceeded our expectations. Her attention to detail and professionalism were outstanding.",
    //         "image": "https://images.unsplash.com/photo-1706108439810-f887f16a22bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //         "name": "Michael Johnson",
    //         "profession": "Digital Marketer",
    //         "review": "Michael Johnson's marketing strategies significantly boosted our online presence. His insights and dedication are commendable.",
    //         "image": "https://images.unsplash.com/photo-1705798543468-5b951da25e1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     }
    // ]

    // const testimonals = testimonalsData.map((x) =>
    //     <div className="carousel-item active">
    //         <div className="testimonalBox">
    //             <div className="client">
    //                 <img className="clientImage" src={x.image} alt="" />
    //                 <div className="clientText">
    //                     <div className="star">
    //                         <i className="bi bi-star-fill"></i>
    //                         <i className="bi bi-star-fill"></i>
    //                         <i className="bi bi-star-fill"></i>
    //                         <i className="bi bi-star-fill"></i>
    //                         <i className="bi bi-star-fill"></i>
    //                     </div>
    //                     <p className="clientText">"{x.review}"</p>
    //                 </div>
    //             </div>
    //             <div className="clientName">
    //                 <h2>{x.name}</h2>
    //                 <p>{x.profession}</p>
    //             </div>
    //         </div>
    //     </div>

    // )



    return (
        // <section>
        //     <div>
        //         <h4>Testimonal</h4>
        //         <h1>What Our Clients Say!</h1>
        //         <p className="testimonalText" >Discover the experiences and stories of our satisfied clients who have chosen eSalon for their salon and parlour needs. Read their testimonials and find out how our platform has transformed their beauty and wellness journeys.</p>
        //     </div>
        //     <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
        //         <div className="carousel-inner">
        //             {/* <div className="carousel-item active">

        //             </div> */}
        //             {/* {testimonals} */}

        //         </div>
        //         <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
        //             data-mdb-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Previous</span>
        //         </button>
        //         <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
        //             data-mdb-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Next</span>
        //         </button>
        //     </div>
        // </section>
        <div>
            <section className="testimonial-section ptb-60">
                <div className="container">
                    <div className="testimonial-area">
                        <div className="testimonial-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-wrapper">
                                        <div className="testimonial-thumb">
                                            <img src="https://envato.appdevs.net/esalon/public/frontend/images/site-section/seeder/testimonial1.webp" alt="client" />
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="testimonial-ratings">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <p>“eSalon has made booking salon appointments a breeze! The variety of services and the convenience of choosing a salon branch that suits me best is fantastic. I’ve never had a bad experience. Highly recommended!”</p>
                                            <div className="client-title">
                                                <h4 className="title">Sarah Johnson</h4>
                                                <p>Marketing Executive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}