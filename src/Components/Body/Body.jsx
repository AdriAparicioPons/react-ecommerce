import CarouselCard from "../CarouselCard/CarouselCard"
import Products from "../Products/Products"



 const Body = ({cart, cartAdd})=> {



  return (
    <div className="d-flex justify-content-center bg-dark">
    <div id="my-carousel" className="carousel slide w-50 " data-bs-ride="carousel">
  <div className="carousel-inner inner">

  
  

(<CarouselCard  cart={cart} cartAdd={cartAdd}>

    </CarouselCard>);
 
  
  </div>
  <a className="carousel-control-prev" href="#my-carousel" role="button" data-bs-slide="prev">
    <span className="sr-only">Previous</span>
    <span className="carousel-control-prev-icon" ></span>
  </a>
  <a className="carousel-control-next" href="#my-carousel" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" ></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
  
  )}


export default Body