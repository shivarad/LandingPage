import { useState } from "react";
import CrossfadeImage from "react-crossfade-image";
import { ReactComponent as NextArrow } from "../../SvgFiles/nextArrow.svg";
import { ReactComponent as PrevArrow } from "../../SvgFiles/prevArrow.svg";
import { CarousellWrapper, PictureList } from "./carouselStyles";

import image0 from "../../images/image0.jpg";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";

const Carrousell = () => {
  const [images, setImages] = useState([image0, image1, image2, image3]);
  const [currentPic, setCurrentPic] = useState(0);

  const PrevPicture = () => {
    if (currentPic !== images.length - 1) setCurrentPic(currentPic + 1);
    else setCurrentPic(0);
    const pics = [...images];
    const pic = pics.shift();
    pics.push(pic);
    setImages(pics);
  };
  const NextPicture = () => {
    if (currentPic !== 0) setCurrentPic(currentPic - 1);
    else setCurrentPic(images.length - 1);
    const pics = [...images];
    const pic = pics.pop();
    pics.unshift(pic);
    setImages(pics);
  };

  return (
    <CarousellWrapper>
      <CrossfadeImage
        style={{
          height: "587px",
          width: "410px",
          filter: "drop-shadow(14px -14px 7px rgba(220, 0, 190, 0.4))",
        }}
        src={images[0]}
      />

      <PictureList>
        <PrevArrow onClick={() => PrevPicture()} />

        {images.map((item, index) =>
          index !== 0 ? (
            <CrossfadeImage
              style={{
                height: "215px",
                width: "157px",
                filter: "drop-shadow(0px 10px 7px rgba(220, 0, 190, 0.4))",
              }}
              src={item}
              key={index}
            />
          ) : null
        )}
        <NextArrow onClick={() => NextPicture()} />
      </PictureList>
    </CarousellWrapper>
  );
};

export default Carrousell;
