/* eslint-disable react/prop-types */
import { Component } from "react";
import Slider from "react-slick";
import carImage from '../../assets/car.jpg';
import '../../styles/styles.css';

export default class Responsive extends Component {
    render() {
        const { toysImg } = this.props;
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 3000, 
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }
            ]
        };
        return (
            <div data-aos="zoom-in-down" className="container mt-4 mx-auto">
                <Slider {...settings}>
                    {toysImg.map(toy => {
                        return (
                            <div key={toy._id} className="slider-img">
                                <img src={toy.pictureUrl ? toy.pictureUrl : carImage} alt="" width={'300px'} height={'200px'} className="img-fluid mx-auto border" />
                                <p className="text-center mt-3">{toy.name ? toy.name : "Car Mania"}</p>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
