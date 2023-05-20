import { useContext, useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import useTitle from "../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
const AddToy = () => {
    useTitle('Add to toy');
    const { user } = useContext(AuthContext)
    const [pictureUrl, setPictureUrl] = useState("");
    const [name, setName] = useState("");
    const [sellerName, setSellerName] = useState("");

    const [subCategory, setSubCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [availableQuantity, setAvailableQuantity] = useState(0);
    const [detailDescription, setDetailDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
      
        const formData = {
            pictureUrl: event.target.pictureUrl.value,
            name: event.target.name.value,
            sellerName: event.target.sellerName.value,
            sellerEmail: user?.email,
            subCategory: event.target.subCategory.value,
            price: parseFloat(event.target.price.value),
            rating: parseFloat(event.target.rating.value),
            availableQuantity: parseInt(event.target.availableQuantity.value),
            detailDescription: event.target.detailDescription.value,
        };

        // console.log(formData);

        fetch('https://ass-server-slsuyel.vercel.app/toys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                //    console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your toy has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    };
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);
    return (
        <Container data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h1 className="text-center">Add a Toy</h1>

            <Form onSubmit={handleSubmit}>
                <div className="d-flex gap-2 justify-content-around">
                    <Form.Group className="w-100" controlId="pictureUrl">
                        <Form.Label>Picture URL of the toy</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter picture URL"
                            name="pictureUrl"
                            value={pictureUrl}
                            onChange={(event) => setPictureUrl(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="w-100" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Form.Group>

                </div>

                <div className="d-flex gap-2 justify-content-around">
                    <Form.Group className="w-100" controlId="sellerName">
                        <Form.Label>Seller Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter seller name"
                            name="sellerName"
                            value={sellerName}
                            onChange={(event) => setSellerName(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="w-100" controlId="sellerEmail">
                        <Form.Label>Seller Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter seller email"
                            name="sellerEmail"
                            value={user?.email}
                        />
                    </Form.Group>
                </div>

                <Form.Group className="w-100" controlId="subCategory">
                    <Form.Label>Sub-Category</Form.Label>
                    <Form.Control
                        as="select"
                        name="subCategory"
                        value={subCategory}
                        onChange={(event) => setSubCategory(event.target.value)}
                    >
                        <option>Classic Cars</option>

                        <option>Racing Cars</option>
                        <option>Ambulances Cars</option>
                    </Form.Control>
                </Form.Group>

                <div className="d-flex gap-2 justify-content-around">
                    <Form.Group className="w-100" controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter price"
                            name="price"
                            value={price}
                            onChange={(event) => setPrice(parseFloat(event.target.value))}
                        />
                    </Form.Group>

                    <Form.Group className="w-100" controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter rating"
                            name="rating"
                            value={rating}
                            onChange={(event) => setRating(parseFloat(event.target.value))}
                        />
                    </Form.Group>
                </div>
                <div className="d-flex gap-2 justify-content-around">
                    <Form.Group className="w-100" controlId="availableQuantity">
                        <Form.Label>Available Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter available quantity"
                            name="availableQuantity"
                            value={availableQuantity}
                            onChange={(event) => setAvailableQuantity(parseInt(event.target.value))}
                        />
                    </Form.Group>

                    <Form.Group className="w-100" controlId="detailDescription">
                        <Form.Label>Detail Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter detail description"
                            name="detailDescription"
                            value={detailDescription}
                            onChange={(event) => setDetailDescription(event.target.value)}
                        />
                    </Form.Group>
                </div>
                <Button variant="primary" type="submit" className="my-3 w-100">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default AddToy;

