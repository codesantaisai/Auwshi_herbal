import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapStyles = {
      height: '400px',
      width: '100%',
    };
  
    const defaultCenter = {
      lat: 9.760509, // Replace with your factory's latitude
      lng: 79.971550 // Replace with your factory's longitude
    };
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyAJCBXRLXtGxYFzLM4fjdKUeUQgczb_gQw">
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    );
  };




const Image = () =>{
  return (
    <div class="full-width-image  page_head page_head_bg">
  <img src="/images/AUWSHI_HERBS.png" alt="Full-width image"/>
</div>
  )
}

const Team = ()=>{
    return (
        <>
  {/* For demo purpose */}
  <div className="container py-5">
    <div className="row text-center text-dark">
      <div className="col-lg-8 mx-auto">
        <h1 className="display-5 mb-3">Team Page</h1>
      </div>
    </div>
  </div>
  {/* End */}
  <div className="container">
    <div className="row text-center">
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src="/images/jathu.jpeg"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Jathurshan Santhirasekaram</h5>
          <span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
           
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src="/images/nilack.jpeg"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Nilaxan Charlas Vijayakumar</h5>
          <span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
           
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src="/images/ano.jpg"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Anosha <br/>Tharmalingam</h5>
          <span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
           
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src="/images/sayann.jpeg"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Suyanasrishayan Anbalagan</h5>
          <span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
           
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
    </div>
  </div>
</>

    )
    
};

const Contact = ()=>{
  return (
    <div className="container-xxl py-6">
    <div className="container">
      <div
        className="section-header text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        
        <h1 className="display-5 mb-3">Contact Us</h1>
        <p>
          Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
          justo sed rebum vero dolor duo.
        </p>
      </div>
      <div className="row g-5 justify-content-center">
        <div className=" col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
          
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                 
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                 
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 200 }}
                    defaultValue={""}
                  />
                  
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-warning rounded-pill py-3 px-5 submit-btn"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          
          <div className="callus text-white d-flex flex-column justify-content-center h-100 p-5">
            <h5 className="text-white">Call Us</h5>
            <p className="mb-5">
              <i className="fa fa-phone-alt me-3" />
              +947 7644 3471
            </p>
            <h5 className="text-white">Email Us</h5>
            <p className="mb-5">
              <i className="fa fa-envelope me-3" />
              auwshiherbs@gmail.com
            </p>
            <h5 className="text-white">Office Address</h5>
            <p className="mb-5">
              <i className="fa fa-map-marker-alt me-3" />
             Vikneshwara road,  Chankanai , Jaffna 
            </p>
            <h5 className="text-white">Follow Us</h5>
            <div className="d-flex pt-2">
              <a
                className="btn btn-square btn-outline-light rounded-circle me-1"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-1"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-1"
                href=""
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                className="btn btn-square btn-outline-light rounded-circle me-0"
                href=""
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


const Feature = () => {
  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="row">
        <div className="col-md-3">
          <div className="card-sl">
            <div className="card-image">
              <img
                src="https://cdn.shopify.com/s/files/1/0622/8508/6951/articles/Watering_Herbs.jpg?v=1648149528"
                alt="Audi Q8"
              />
            </div>

            <a className="card-action" href="#">
              <i className="fa fa-heart"></i>
            </a>
            <div className="card-heading">Audi Q8</div>
            <div className="card-text">
              
            </div>
            <div className="card-text">$67,400</div>
            <a href="#" className="card-button">
              Purchase
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-sl">
            <div className="card-image">
              <img
                src="https://blog.mountainroseherbs.com/hs-fs/hubfs/Blog%20images/Herbs%20for%20Skincare.jpg?width=600&name=Herbs%20for%20Skincare.jpg"
                alt="Audi Q8"
              />
            </div>

            <a className="card-action" href="#">
              <i className="fa fa-heart"></i>
            </a>
            <div className="card-heading">Audi Q8</div>
            <div className="card-text">
              
            </div>
            <div className="card-text">$67,400</div>
            <a href="#" className="card-button">
              Purchase
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-sl">
            <div className="card-image">
              <img
                src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/8/shutterstock_656977798.jpg"
                alt="Audi Q8"
              />
            </div>

            <a className="card-action" href="#">
              <i className="fa fa-heart"></i>
            </a>
            <div className="card-heading">Audi Q8</div>
            <div className="card-text">
              
            </div>
            <div className="card-text">$67,400</div>
            <a href="#" className="card-button">
              Purchase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function About(){
    return(
    <div>
      <Image></Image>
        <Feature></Feature>
        <br></br> <br></br>
        <Contact></Contact>
        <br></br> <br></br>
        <Map></Map>
        <Team></Team>
    </div>
      

    )
}

export default About;