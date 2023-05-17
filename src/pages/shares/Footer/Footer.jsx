
const Footer = () => {
    return (
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
            <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                <div className="row">
                    <div className="col-lg-3 mb-3">

                        <ul className="list-unstyled small">
                            <li className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consequatur maiores excepturi aut qui officiis, facere atque, repellat, ipsam minus nesciunt quibusdam quidem. Saepe maxime doloremque at expedita veritatis id!</li>
                        </ul>

                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/">Home</a></li>
                            <li className="mb-2"><a href="/docs/5.3/">Docs</a></li>
                            <li className="mb-2"><a href="/docs/5.3/examples/">Examples</a></li>
                            <li className="mb-2"><a href="https://icons.getbootstrap.com/">Icons</a></li>
                            <li className="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
                            <li className="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                            <li className="mb-2"><a href="https://cottonbureau.com/people/bootstrap">Swag Store</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-lg-3 mb-3">
                        <h5>Community</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#">Issues</a></li>
                            <li className="mb-2"><a href="#">Discussions</a></li>
                            <li className="mb-2"><a href="#">Corporate sponsors</a></li>
                            <li className="mb-2"><a href="#">Open Collective</a></li>
                            <li className="mb-2"><a href="#">Stack Overflow</a></li>
                        </ul>

                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <h3>Subscribe us</h3>
                        <form>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required className="form-control" />
                            <button type="submit" className="btn btn-primary my-2">Subscribe</button>
                        </form>
                        <h3>Follow us:</h3>
                        <ul className="social-icons d-flex list-unstyled justify-content-between">
                            <li><a href="#"><i className="fs-5 m-1 fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fs-5 m-1 fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fs-5 m-1 fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fs-5 m-1 fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fs-5 m-1 fa fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fs-5 m-1 fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="text-center px-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023. All rights reserved.
            </div>


        </footer >
    );
};

export default Footer;