export default function CollegeSection() {

    const imgObj = [
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            imgUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            imgUrl: "https://images.unsplash.com/photo-1522123436910-416191f97bfe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            imgUrl: "https://i.ytimg.com/vi/oVc_MdFcMPs/maxresdefault.jpg"
        },
        {
            id: 5,
            imgUrl: "https://images.unsplash.com/photo-1640301133857-c4bc5789c1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 6,
            imgUrl: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 7,
            imgUrl: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 8,
            imgUrl: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 9,
            imgUrl: "https://images.unsplash.com/photo-1593269244684-3f9c90ddf5a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]
    return (
        <section className="photo-section ptb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="galary-area-1">
                            <div className="row">
                                <div className="col-lg-12 pb-4">
                                    <div className="photo-item">
                                        <img className="img-fluid" src={imgObj[3].imgUrl} alt="Image1" />
                                    </div>
                                </div>
                                <div className="col-lg-12 pb-4">
                                    <div className="photo-item">
                                        <img className="img-fluid" src={imgObj[1].imgUrl} alt="Image1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 pb-4">
                        <div className="galary-area-2">
                            <div className="photo-item">
                                <img className="img-fluid centerImage" src={imgObj[4].imgUrl} alt="Image1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 pb-4">
                        <div className="galary-area-1">
                            <div className="row">
                                <div className="col-lg-12 pb-4">
                                    <div className="photo-item">
                                        <img className="img-fluid" src={imgObj[6].imgUrl} alt="Image1" />
                                    </div>
                                </div>
                                <div className="col-lg-12 pb-4">
                                    <div className="photo-item">
                                        <img className="img-fluid" src={imgObj[8].imgUrl} alt="Image1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 pb-4">
                        <div className="galary-area-1">
                            <div className="row">
                                <div className="col-lg-12 pb-4">
                                    <div className="photo-item">
                                        <img className="img-fluid" src={imgObj[7].imgUrl} alt="Image1" />
                                    </div>
                                </div>
                                <div className="col-lg-12 pb-4">
                                    <div className="photo-item">
                                        <img className="img-fluid" src={imgObj[5].imgUrl} alt="Image1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}