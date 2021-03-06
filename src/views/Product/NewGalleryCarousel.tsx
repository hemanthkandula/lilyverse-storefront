import * as React from "react";

import { CachedImage } from "@components/molecules";

// import { Carousel } from "../../components";
import { ProductDetails_product_images } from "./gqlTypes/ProductDetails";

import noPhotoImg from "../../images/no-photo.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const NewGalleryCarousel: React.FC<{
  images: ProductDetails_product_images[];
}> = ({ images }) => (

  // <div className="product-page__product__gallery">
  //   <Carousel
  //     renderCenterLeftControls={() => null}
  //     renderCenterRightControls={() => null}
  //     renderBottomCenterControls={props => {
  //       const indexes = [];
  //
  //
  //       for (let i = 0; i < props.slideCount; i++) {
  //         indexes.push(i);
  //       }
  //
  //       return (
  //         <ul className="product-page__product__gallery__nav">
  //           {indexes.map(index => (
  //             <li
  //               key={index}
  //               onClick={props.goToSlide.bind(null, index)}
  //               className={props.currentSlide === index ? "active" : ""}
  //             >
  //               <span />
  //             </li>
  //           ))}
  //         </ul>
  //       );
  //     }}
  //   >
  //     {images.map(image => (
  //       <CachedImage url={image.url || noPhotoImg} key={image.id}>
  //         <img src={noPhotoImg} alt={image.alt} />
  //       </CachedImage>
  //     ))}
  //   </Carousel>
  // </div>
  <div className="product-page__product__gallery">
      <Slider {...settings}>
          {images.map(image => (
              <CachedImage url={image.url || noPhotoImg} key={image.id}>
                  <img src={noPhotoImg} alt={image.alt} />
              </CachedImage>
          ))}
      </Slider>
  </div>

);

export default NewGalleryCarousel;
