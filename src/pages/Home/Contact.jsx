import '../../styles/styles.css'
const Contact = () => {
    return (

        <div className=" row mx-auto py-5" style={{ background: "#295a411c", padding: '0px 10px' }}>

            <div className="col-md-6 container">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Phone number</label>
                        <input type="number" className="form-control" id="number" placeholder="Enter your phone number" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary my-4">Submit</button>
                </form>
            </div>
            <div className="col-md-6 container">
                <img src="https://media.istockphoto.com/id/1168945108/photo/close-up-image-of-male-hands-using-smartphone-with-icon-telephone-email-mobile-phone-and.jpg?s=612x612&w=0&k=20&c=aVojLzP1n3XNxuRdy7Pqdzo6OyRAVanOWDUWjbu3R8Q="

                    className="img-fluid border-style2 w-100"
                    alt="" />
            </div>

        </div>
    )
};

export default Contact;