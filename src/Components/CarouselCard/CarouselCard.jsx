import AddToCart from "../AddToCart/AddToCart";
import Products from "../Products/Products";

const CarouselCard = ({ cartAdd, cart }) => {
  
  
  return (
    <>
     {Products.map((prod) =>  {
      return(
        <div className="rounded" key={prod.id}>
        <div className={`carousel-item ${prod.active}`}>
          <img src={prod.img} className=" d-block w-100 " alt={prod.title} />
          <div className="carousel-caption  rounded bg-transparent">
            <h5>{prod.title}</h5>
            <p>{prod.description}</p>
            <p>{prod.price} €</p>
            <AddToCart cartAdd={cartAdd} cart={cart} prod={prod} />
          </div>
        </div>
      </div>)
         })  
        }
      </>  
  )}

export default CarouselCard;
