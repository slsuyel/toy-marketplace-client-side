import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  const toys = useLoaderData()
  const { pictureUrl, name, sellerName, sellerEmail, price, rating, availableQuantity, description } = toys

  useTitle(name)
  return (

    <div className="row w-75 mx-auto ">
      <div className="col-md-6 my-auto shadow">
        <img src={pictureUrl} className="img-fluid rounded " width={'300px'} />
        <div className="d-flex justify-content-center gap-3 mb-3">
          <button className="btn btn-outline-info">Add To cart</button>
          <button className="btn btn-outline-danger">Buy Now</button>
        </div>
      </div>
      <div className="col-md-6">
        <h3 className="mb-4 text-primary mt-3"> <span className="text-dark">Car Name:</span> {name}</h3>
        <p><strong>Seller Name:</strong> {sellerName}</p>
        <p><strong>Seller Contact:</strong> {sellerEmail}</p>
        <p><strong>Price:</strong> $ {price}</p>
        <div className="mt-4 d-flex justify-content-between">
          <p><strong>Ratings:</strong> {rating}</p>
          <p><strong>Quantity:</strong> {availableQuantity}</p>
        </div>
        <p className=""><strong>Description:</strong> {description ? description : 'This toy car is a perfect addition to any racing collection. Its sleek design and vibrant color make it stand out on the tracks. Get ready for high-speed fun!'}</p>

      </div>
    </div>





  );
};

export default ToyDetails;
