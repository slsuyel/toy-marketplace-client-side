import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
    useTitle('My toys')
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);

    const url = `http://localhost:3000/mytoys/${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMyToys(data)
            });
    }, [user]);


    return (
        <Container>
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
                    {myToys.map((toy) => (
                        <tr key={toy._id}>
                            <td>{toy.sellerName}</td>
                            <td>{toy.name}</td>
                            <td>{toy.subCategory}</td>
                            <td>{toy.price}</td>
                            <td>{toy.availableQuantity}</td>
                            <td>
                                <Link to={`/toys/${toy._id}`}>
                                    <Button variant="primary">View Details</Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default MyToys;