import React from 'react';

const Card = ({ img, name, rating, price, discount, handleExchange, _id }) => {
  return (
    <div>
      <div className="card m-3 text-primary  border shadow-xl">
        <figure className="px-10 pt-10">
          <img  src={img} alt="Shoes" className="rounded-xl h-48" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary">{name}</h2>
          <p className='text-[tomato] font-semibold'>${price}</p>
          <div className="card-actions">
            <button onClick={()=>handleExchange(_id)} className="btn button btn-primary">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;