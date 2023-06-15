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
  <img src="/images/AUWSHI_HERBS.png" alt="Full-width image" className='jathu'/>
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
        <h1 className="display-5 mb-3 underline-heading">Team Page</h1>
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
            src="/images/ja.jpg"
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
        <div className="bg-white rounded shadow-sm py-5 px-4 nilax">
          <img
            src="/images/ni.jpg"
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
            src="/images/anoshaa.jpg"
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
    
        
<section className="contact-page-sec">
<h1 className="display-5 mb-3 underline-heading" >Conduct Us</h1>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-map-marked"></i>
            </div>
            <div className="contact-info-text">
              <h2>address</h2>
              <span>Vikneswara road ,Changanai. </span> 
            
            </div>
          </div>            
        </div>          
      </div>          
      <div className="col-md-4">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-info-text">
              <h2>E-mail</h2>
              <span>auwshiherbs@gmail.com</span> 
              
            </div>
          </div>            
        </div>                
      </div>                
      <div className="col-md-4">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-info-text">
              <h2>Phone</h2>
              <span>0706443471</span>
              
            </div>
          </div>            
        </div>          
      </div>          
    </div>
    <div className="row">
      <div className="col-md-8">
        <div className="contact-page-form">
          <h2>Conduct Us</h2> 
          <form action="contact-mail.php" method="post">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Your Name" name="name"/>
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" required/>
                </div>
              </div>                              
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone"/>
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>                
              <div className="col-md-12 message-input">
                <div className="single-input-field">
                  <textarea placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>                                                
              <div className="single-input-fieldsbtn">
                <input type="submit" value="Send Now"/>
              </div>                          
            </div>
          </form>   
        </div>      
      </div>
      <div className="col-md-4">        
        <div className="contact-page-map">
          
          <Map></Map>
        </div>          
      </div>        
    </div>
  </div>

</section>
     );
    }









function Feature(){
  return(
    <div className="section-header text-center mx-auto mb-5 wow fadeInUp"
    data-wow-delay="0.1s">
      <h1 className="display-5 mb-3 underline-heading">Our Features </h1>
      <p>Our herbal product offers a range of benefits. It is made from natural ingredients, free from harmful chemicals..</p>
<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
  <div className="card h-100">
    <img id="figure" src="https://cdn.shopify.com/s/files/1/0622/8508/6951/articles/Watering_Herbs.jpg?v=1648149528" />
    <div className="card-body">
      <h5 className="card-title">Herbal Product</h5>
      <p className="card-text">
      Natural ingredients. No harmful chemicals. Promotes wellness. Relieves ailments. Gentle yet effective. Supports natural healing. Harness the power of nature.
      </p>
    </div>
    {/* <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div> */}
  </div>
</div>
<div className="col">
  <div className="card h-100">
    <img  id="figure" src="https://blog.mountainroseherbs.com/hubfs/Blog%20images/Herbs%20for%20Skincare%20Banner.jpg" />
    <div className="card-body">
      <h5 className="card-title">Natural Process</h5>
      <p className="card-text">Natural processes are the inherent mechanisms by which nature functions. They encompass various phenomena like photosynthesis, erosion, and ecological interactions, crucial for maintaining the balance and sustainability of ecosystems without human intervention.</p>
    </div>
    {/* <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div> */}
  </div>
</div>
<div className="col">
  <div className="card h-100">
    <img id="figure" src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/8/shutterstock_656977798.jpg" />
    <div className="card-body">
      <h5 className="card-title">Biologically Safe</h5>
      <p className="card-text">
      Biologically safe refers to products or substances that are non-toxic and pose no harm or adverse effects on living organisms, including humans and the environment. They are designed to be compatible and safe for biological systems.
      </p>
    </div>
    {/* <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div> */}
  </div>
</div>
</div>
</div>
  );
}





function About(){
    return(
    <div>
      <Image></Image>
      <br></br> <br></br>
        <Feature></Feature>
        <br></br> <br></br><br></br>
        <Contact></Contact>
        <Team></Team>
    </div>
      

    )
}

export default About;