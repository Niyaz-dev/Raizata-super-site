import React from 'react';
import './ImageCarousel.scss'
import image1 from "../../assets/carousel/1667579812_5-sportishka-com-p-shutki-pro-mashini-instagram-5.jpeg"
import image2 from "../../assets/carousel/1667579838_7-sportishka-com-p-shutki-pro-mashini-instagram-7.jpeg"
import image3 from "../../assets/carousel/1667579833_11-sportishka-com-p-shutki-pro-mashini-instagram-11.jpeg"
import image4 from "../../assets/carousel/1667579844_3-sportishka-com-p-shutki-pro-mashini-instagram-3.jpeg"
import image5 from "../../assets/carousel/1667579852_1-sportishka-com-p-shutki-pro-mashini-instagram-1.jpeg"
import image6 from "../../assets/carousel/1667579872_20-sportishka-com-p-shutki-pro-mashini-instagram-20.jpeg"
import Carousel from "react-material-ui-carousel";

const images = [image1, image2, image3, image4, image5, image6];

export const ImageCarousel = () => {

    return (
        <Carousel className={'image-carousel'}>
            {images.map(img => <Image src={img}/>)}
        </Carousel>
    )
}

const Image = ({src}: any) => {
    return <img className={'image-carousel__image'} src={src}/>
}