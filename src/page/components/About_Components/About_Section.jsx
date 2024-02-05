export default function AboutSection() {
    return (
        <section>
            <div className="AboutSection">
                <div className="col">
                    <div className="imgSection">
                        <img className="contactImage" src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    </div>
                    <div className="col">
                        <br />
                    <div className="textSection">
                        <h4>About Our Salon</h4>
                        <h1>Empowering Beauty, Enhancing Lives: Discover eSalon</h1>
                        <p>At eSalon, we’re not just a salon booking platform – we’re a testament to the transformative power of beauty and wellness. Our story is one of passion, dedication, and commitment to enhancing lives through exceptional salon and parlour services. We invite you to journey with us through the heart of what makes eSalon a unique and trusted partner in your pursuit of beauty and well-being. Every treatment and every experience is crafted to align with your specific style and preferences. We’re here to ensure that you get precisely what you desire. We are committed to supporting the growth of entrepreneurs and startups in the salon industry. Our affordable licensing options are designed to simplify the process of getting started with eSalon.</p>
                        <ol>
                            <li>Our Commitment to Excellence</li>
                            <li>Seamless Booking, Empowered Choices</li>
                            <li>Multi-Branch Convenience</li>
                            <li>Customized Beauty, Personalized Services
                            </li>
                            <li>Payment Flexibility</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="AboutSection">
                <div className="textSection">
                    <h4>FAQ</h4>
                    <h1>Your Queries Answered: Explore Our Frequently Asked Questions</h1>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
                                    How do I book an appointment with eSalon?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Can I customize the services I book?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <br />

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Is eSalon suitable for multiple branches or chain salons?
                                </button>
                            </h2>

                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How can entrepreneurs and startups benefit from eSalon?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="imgSection">
                    <img className="contactImage" src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>

        </section>
    )
}