import React from 'react'

function CardDisplay({id, title, description, price, img,active}) {
  return (
    <>
    <div className="modal-body">
    <div className="card" style={{width: '18rem'}}>
  <img src={img} className="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">{price} €</p>

    <a href="#" className="btn btn-primary">Go somewhere</a>
    
  </div>
</div>
</div>
    </>
  )
}

export default CardDisplay