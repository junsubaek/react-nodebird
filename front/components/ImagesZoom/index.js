import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import {
  Global,
  OverLay,
  Header,
  CloseBtn,
  SlickWrapper,
  ImgWrapper,
  Indicator,
} from "./styles";

function ImagesZoom({ images, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <OverLay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            beforeChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={`http://localhost:3065/${v.src}`} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1} / {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </OverLay>
  );
}

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;