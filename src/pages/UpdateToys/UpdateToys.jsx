import { Button, Container, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
    const toys = useLoaderData()
    // console.log(toys);
    const { availableQuantity, price, detailDescription, _id } = toys

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const availableQuantity = form.availableQuantity.value
        const price = form.price.value
        const detailDescription = form.detailDescription.value
        const updatedToys = { availableQuantity, price, detailDescription }
        console.log(updatedToys);

        fetch(`https://ass-server-slsuyel.vercel.app/alltoys/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your toy has been Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }



    return (
        <Container>
            <h3 className="text-center my-4">UpdateToys </h3>
            <Form onSubmit={handleUpdate} >
                <div className="d-flex gap-2 justify-content-around">
                    <Form.Group className="w-100" controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            defaultValue={price}
                            name="price"
                        />
                    </Form.Group>
                    <Form.Group className="w-100" controlId="availableQuantity">
                        <Form.Label>Available Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            defaultValue={availableQuantity}
                            name="availableQuantity"

                        />
                    </Form.Group>

                </div>
                <div className="d-flex gap-2 justify-content-around">


                    <Form.Group className="w-100" controlId="detailDescription">
                        <Form.Label>Detail Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            defaultValue={detailDescription}
                            name="detailDescription"

                        />
                    </Form.Group>
                </div>
                <Button variant="primary" type="submit" className="my-3 w-100">
                    Update
                </Button>
            </Form>
        </Container>
    );
};

export default UpdateToys;