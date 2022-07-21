import React from "react";

function CardDisplay() {
  
  const itemsInCart = JSON.parse(localStorage.getItem("cart")) || [];
  return (
    <>
      {itemsInCart.map((item) => {
        return (

          <div key={item.id} className="modal-body">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price} €</p>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CardDisplay;
