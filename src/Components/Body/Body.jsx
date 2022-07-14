import CarouselCard from "../CarouselCard/CarouselCard"
import Products from "../Products/Products"



 const body = ()=> {


  return (
    <div className="d-flex justify-content-center">
    <div id="my-carousel" className="carousel slide w-50 " data-bs-ride="carousel">
  <div className="carousel-inner inner">

  
   {Products.map((prod) =>  {
    return (<CarouselCard key={prod.id} title={prod.title} active={prod.active} description={prod.description} price={prod.price} img={prod.img}>

    </CarouselCard>);
 
   })}
  </div>
  <a class="carousel-control-prev" href="#my-carousel" role="button" data-bs-slide="prev">
    <span class="sr-only">Previous</span>
    <span class="carousel-control-prev-icon" ></span>
  </a>
  <a class="carousel-control-next" href="#my-carousel" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" ></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
  
  )}


export default body