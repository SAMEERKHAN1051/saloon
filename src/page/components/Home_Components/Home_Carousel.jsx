import { Link } from "react-router-dom"
export default  function Carousels() {
  // const imageObj = [
  //   {
  //     id: 1,
  //     imgUrl: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id: 2,
  //     imgUrl: "https://images.unsplash.com/photo-1556755137-a16b24c5d19a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id: 3,
  //     imgUrl: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   }
  // ]
  // const image = imageObj.map((x)=> <div className="carousel-item active"> <img className="d-block w-100" key={x.id} src={x.imgUrl} alt={x.id} /> </div>)

  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-light carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carouselImg" alt="..." />
            <div className="carousel-caption ">
              <h1>Your Beauty, Your Way, Your Salon</h1>
              <p>Discover a world of personalized beauty at your fingertips. With eSalon, it’s all about you. Book your salon appointment effortlessly and indulge in a salon experience tailored to your unique style and needs.</p>
              <Link to={"/find"} >
              <button className="themeBtn">Find Parlour</button>
              </Link>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://images.unsplash.com/photo-1556755137-a16b24c5d19a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carouselImg" alt="..." />
            <div className="carousel-caption ">
              <h1>Elevate Your Beauty Journey</h1>
              <p>Take your beauty journey to new heights with eSalon. We make booking your salon appointments a breeze. Experience the power of choice, personalization, and convenience.</p>
              <Link to={"/find"} >
              <button className="themeBtn">Find Parlour</button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carouselImg" alt="..." />
            <div className="carousel-caption ">
              <h1>Where Beauty Meets Convenience</h1>
              <p>Welcome to eSalon, your go-to destination for hassle-free salon bookings. Embrace the future of beauty and convenience with our platform.</p>
              <Link to={"/find"} >
              <button className="themeBtn">Find Parlour</button>
              </Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-next-icon themeBtn carouselBtn btnLeft" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-prev-icon themeBtn carouselBtn 
          btnRight" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}