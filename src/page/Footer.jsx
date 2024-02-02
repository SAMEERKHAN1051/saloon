import React from "react"
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <footer className="text-lg-start">
      <section className="d-flex justify-content-center justify-content-lg-between p-4">
        <div className="me-5 d-none d-lg-block">
        </div>
      </section>

      <section className="">
        <div className="container text-md-start mt-0 "  >
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-4 mx-auto p-2">
              <img className="footerImg" src="/assets/logo.png" alt="" />
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
              <div>
                <Link to="#" className="me-4 text-reset">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="me-4 text-reset">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="me-4 text-reset">
                  <i className="fab fa-google"></i>
                </Link>
                <Link to="#" className="me-4 text-reset">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#" className="me-4 text-reset">
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link to="#" className="me-4 text-reset">
                  <i className="fab fa-github"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mx-auto">
              <h2 className="text-uppercase fw-bold mb-4">
                Products
              </h2>
              <p>
                <Link to="##!" className="text-reset">Angular</Link>
              </p>
              <p>
                <Link to="##!" className="text-reset">React</Link>
              </p>
              <p>
                <Link to="##!" className="text-reset">Vue</Link>
              </p>
              <p>
                <Link to="##!" className="text-reset">Laravel</Link>
              </p>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-5 mx-auto">
              <h2 className="text-uppercase fw-bold mb-4">
                Useful links
              </h2>
              <p>
                <Link to="##!" className="text-reset">Pricing</Link>
              </p>
              <p>
                <Link to="##!" className="text-reset">Settings</Link>
              </p>
              <p>
                <Link to="##!" className="text-reset">Orders</Link>
              </p>
              <p>
                <Link to="##!" className="text-reset">Help</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <p className="text-center p-4 footerLink">
        © 2021 Copyright:
        <Link className="text-reset fw-bold " to="https://codeAugment.com/"> CodeAugment.com</Link>
      </p>
    </footer>
  )
}