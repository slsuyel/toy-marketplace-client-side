import { useState, useEffect, useContext } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const AllToysPage = () => {
  useTitle('All Toys')
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(AuthContext)
  useEffect(() => {
    fetch("https://ass-server-slsuyel.vercel.app/alltoys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3 mx-auto text-center w-50" controlId="searchInput">
          <Form.Label>Search by toy name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter toy name"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </Form.Group>
      </Form>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <tr key={toy._id}>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  <Link to={`/toydetails/${toy._id}`}>
                    {user ? (
                      <Button variant="primary">View Details</Button>
                    ) : (
                      <Button variant="primary" onClick={() => Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You have to log in first to view details',
                        showConfirmButton: false,
                        timer: 1000
                      })}>
                        View Details
                      </Button>
                    )}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </Container>
  );
};

export default AllToysPage;
