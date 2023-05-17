import { useState } from "react";

function UpdateToys() {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState('');

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: handle form submission
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Price:
                <input type="number" value={price} onChange={handlePriceChange} />
            </label>
            <br />
            <label>
                Available Quantity:
                <input type="number" value={quantity} onChange={handleQuantityChange} />
            </label>
            <br />
            <label>
                Detail Description:
                <textarea value={description} onChange={handleDescriptionChange} />
            </label>
            <br />
            <button type="submit">Update Data</button>
        </form>
    );
}

export default UpdateToys;