import '../../styles/styles.css'
const About = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="mt-5 py-3 mx-auto w-100" style={{ background: "#295a411c", padding: '0px 10px' }}>
            <div className="mx-auto row w-100">
                <div className="col-lg-6">
                    <h2>About Our Toy World</h2>
                    <p>Welcome to Our Toy World, where imagination knows no bounds! We are passionate about providing children with high-quality toys that inspire creativity, promote learning, and bring joy to their lives.</p>
                    <p>With a wide range of toys for all ages, from toddlers to pre-teens, we strive to offer a diverse selection that caters to different interests and developmental needs. Our curated collection includes educational toys, puzzles, building blocks, board games, dolls, action figures, and much more.</p>
                </div>
                <div className="col-lg-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08Sh_TJ45BRDE_HMdluPzwuvCuxeiZqPecQ&usqp=CAU" alt="About Us" className="img-fluid about-image border-style" />
                </div>
            </div>
        </div>
    );
}

export default About;