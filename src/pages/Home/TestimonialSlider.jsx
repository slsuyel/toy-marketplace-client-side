
import Slider from 'react-slick';
import '../../styles/styles.css';
import testi from '../../assets/testi.webp'
export default function TestimonialSlider() {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            comment: 'I had an amazing experience at Car Mania. The selection of toy cars was impressive, catering to both collectors and children. The staff was knowledgeable and friendly, providing excellent assistance. I was thoroughly impressed with the shops atmosphere and the quality of the products available. Highly recommended!',
            avatar: 'https://en.wikialpha.org/mediawiki/images/9/91/Suyel_Haque.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            comment: 'I had an amazing experience at this Shop. The selection of toy cars was impressive, catering to both collectors and children. The staff was knowledgeable and friendly, providing excellent assistance. I was thoroughly impressed with the shops atmosphere and the quality of the products available. Highly recommended!',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL4wRlmBpNKZo3BJz6_Kw0H3ClkeqD084yA&usqp=CAU',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            comment: 'The Car Mania exceeded all my expectations! The range of toy cars available was impressive, with a diverse collection that appealed to both collectors and kids. The staff was friendly, approachable, and well-informed about their products. They provided helpful recommendations based on my preferences. The quality of the toy cars was outstanding, and the prices were reasonable. The shop had a great atmosphere, making it a joy to browse and shop.',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhdijR62wvq5jCO-T5lOhqm6QGB2L9iPXtQ&usqp=CAU',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000, 
    };

    return (
        <div className='row w-100 mx-auto'>
            <div className='col-md-6'>
                <img src={testi} width={'350px'} className='img-fluid w-100' />
            </div>
        
                <div className="testimonial-slider text-center col-md-6 mt-5">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial">
                                <div className="avatar-container">
                                    <img className="avatar" src={testimonial.avatar} alt={testimonial.name} />
                                </div>
                                <p className="name">{testimonial.name}</p>
                                <p className="comment">{testimonial.comment}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
          
        </div>
    );
}
