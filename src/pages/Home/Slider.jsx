/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Component } from "react";
import Slider from "react-slick";
import carImage from '../../assets/car.jpg';

export default class Responsive extends Component {
    render() {
        const { toysImg } = this.props;
        console.log(toysImg);
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
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
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div >
                <Slider {...settings}>
                    {
                        toysImg.map(toy => {
                            return (
                                <div key={toy._id}>
                                    <img src={toy.pictureUrl ? toy.pictureUrl : carImage} alt="" width={'200px'} />
                                </div>
                            );
                        })
                    }
                </Slider>
            </div>
        );
    }
}
