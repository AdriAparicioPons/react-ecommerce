import CounterApp from "../CounterApp/CounterApp"


 const CarouselCard = ({id, title, description, price, img,active})=> {

  return (
    <>
   
      <div className="rounded">
      <div className= {`carousel-item ${active}`}>
        <img src={img} class=" d-block w-100 " alt={title}/>
        <div className="carousel-caption  rounded bg-transparent">
        <h5>{title}</h5>
        <p>{description}</p>
        <p>{price} €</p>
        <button id="addTocard" className="btn btn-success" onClick>🛒</button>
        <CounterApp/>

        

      </div>
       
    </div>
    
    </div>

    
        
        </>
  )
}

export default CarouselCard