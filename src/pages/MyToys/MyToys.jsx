import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const MyToys = () => {
  useTitle('My toys');
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const url = `https://ass-server-slsuyel.vercel.app/mytoys/${user?.email}?sortOrder=${sortOrder}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, sortOrder]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ass-server-slsuyel.vercel.app/alltoys/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your toy has been deleted',
                showConfirmButton: false,
                timer: 1500
              })
              window.location.reload()
            }
          })
      }
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSort = (event) => {
    const selectedSortOrder = event.target.value;
    setSortOrder(selectedSortOrder);
  };

  return (
    <Container data-aos="fade-up">
      <div className="align-items-center d-flex justify-content-between my-3">
        <h3 className="">My toys:</h3>
        <div>
          <label htmlFor="sortOrder" className="d-block mb-1">Sort By Price:</label>
          <select id="sortOrder" value={sortOrder} onChange={handleSort}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <tr key={toy._id}>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td className="d-flex gap-2">
                  <Link to={`/alltoys/${toy._id}`}>
                    <Button variant="primary">Update</Button>
                  </Link>
                  <button onClick={() => { handleDelete(toy._id) }} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default MyToys;
