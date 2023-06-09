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
<div className="projcard-container">
  <div className="projcard projcard-blue">
    <div className="projcard-innerbox">
      <img
        className="projcard-img"
        src="https://picsum.photos/800/600?image=1041"
      />
      <div className="projcard-textbox">
        <div className="projcard-title">Card Title</div>
        <div className="projcard-subtitle">
          This explains the card in more detail
        </div>
        <div className="projcard-bar" />
        <div className="projcard-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className="projcard-tagbox">
          <span className="projcard-tag">HTML</span>
          <span className="projcard-tag">CSS</span>
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
