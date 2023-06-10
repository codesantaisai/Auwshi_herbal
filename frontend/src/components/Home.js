import React from 'react';




const Carousel = ()=>{
    return(
        <div
  id="carouselExampleSlidesOnly"
  className="carousel slide"
  data-mdb-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src="/images/carousel.png"
        className="d-block w-100"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        className="d-block w-100"
        alt="Camera"
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        className="d-block w-100"
        alt="Exotic Fruits"
      />
    </div>
  </div>
</div>

    );
    
};

const Why = ()=>{
  return(
<div className="projcard-container container-fluid">
  <div className="projcard projcard-blue">
    <div className="projcard-innerbox">
      <img
        className="projcard-img"
        src="/images/web.jpg"
      />
      <div className="projcard-textbox">
        <div className="projcard-title">Herbal Product</div>
        <div className="projcard-subtitle">
          {/* This explains the card in more detail */}
        </div>
        <div className="projcard-bar" />
        <div className="projcard-description">
          Our herbal product offers a range of benefits. It is made from natural ingredients, free from harmful chemicals. Our product promotes overall wellness, providing relief from common ailments. With its gentle yet effective formula, it supports the body's natural healing processes. Experience the power of nature with our herbal product.
        </div>
        <div className="projcard-tagbox">
          {/* <span className="projcard-tag">HTML</span> */}
          {/* <span className="projcard-tag">CSS</span> */}
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

// home product

function Viewproduct() {
  return (
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="product-grids">
          <div className="product-images">
            <a href="#" className="images">
              <img className="pic-1" src="/images/products/toothpowder.jpg" alt="Product 1" />
            </a>
            <ul className="product-link">
              <li>
                <a href="/product">
                  <i className="fa fa-eye"></i>View product
                </a>
              </li>
            </ul>
          </div>
          <div className="product-contents">
            <h3 className="titles">
              <a href="#">Tooth powder</a>
            </h3>
            <div className="prices">LKR 100.00</div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="product-grids">
          <div className="product-images">
            <a href="#" className="images">
              <img className="pic-1" src="/images/products/toothpowder.jpg" alt="Product 2" />
            </a>
            <ul className="product-link">
              <li>
                <a href="/product">
                  <i className="fa fa-eye"></i>View products
                </a>
              </li>
            </ul>
          </div>
          <div className="product-contents">
            <h3 className="titles">
              <a href="#">Tooth Powder</a>
            </h3>
            
            <div className="prices">LKR 100.00</div>
            
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="product-grids">
          <div className="product-images">
            <a href="#" className="images">
              <img className="pic-1" src="/images/products/toothpowder.jpg" alt="Product 2" />
            </a>
            <ul className="product-link">
              <li>
                <a href="/product">
                  <i className="fa fa-eye"></i>View products
                </a>
              </li>
            </ul>
          </div>
          <div className="product-contents">
            <h3 className="titles">
              <a href="#">Tooth Powder</a>
            </h3>
            
            <div className="prices">LKR 100.00</div>
            
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="product-grids">
          <div className="product-images">
            <a href="#" className="images">
              <img className="pic-1" src="/images/products/toothpowder.jpg" alt="Product 2" />
            </a>
            <ul className="product-link">
              <li>
                <a href="/product">
                  <i className="fa fa-eye"></i>View products
                </a>
              </li>
            </ul>
          </div>
          <div className="product-contents">
            <h3 className="titles">
              <a href="#">Tooth Powder</a>
            </h3>
            
            <div className="prices">LKR 100.00</div>
            
          </div>
        </div>
      </div>
    </div>
  );
}



function App (){

    return(
       <div>
         <Carousel></Carousel>
         <Why></Why>
         <Viewproduct/>
       </div>
    );
};
export default App;
