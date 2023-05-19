import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toys = useLoaderData()
  const { pictureUrl, name, sellerName, sellerEmail, price, rating, availableQuantity, description } = toys
  return (
    <Card className=" mt-4 mx-auto" style={{ width: '28rem' }}>
      <Card.Img variant="top" src={pictureUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <div className=" mt-3">
          <p>Seller Name : {sellerName}</p>
          <p>Seller Email :{sellerEmail}</p>
        </div>

        <Card.Text>
          Price: ${price}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Text>
            Rating: {rating}
          </Card.Text>
          <Card.Text>
            Available quantity: {availableQuantity}
          </Card.Text>
        </div>
        <Card.Text>
          Description: {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ToyDetails;
