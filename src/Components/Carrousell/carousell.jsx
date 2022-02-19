import { useEffect, useState } from "react";
import CrossfadeImage from "react-crossfade-image";
import {ReactComponent as NextArrow} from "../../SvgFiles/nextArrow.svg";
import {ReactComponent as PrevArrow} from "../../SvgFiles/prevArrow.svg";

import image0 from "../../images/image0.png";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";

const Carrousell = () => {
  const [images, setImages] = useState([image0, image1, image2, image3]);
  const [currentPic, setCurrentPic] = useState(0);

  useEffect(() => {
    const pics = [...images];
    const pic = pics.shift();
    console.log(pics);
    pics.push(pic);
    setImages(pics);
  }, [currentPic]);

  const PrevPicture = () => {
    if (currentPic !== images.length-1) setCurrentPic(currentPic + 1);
    else setCurrentPic(0);
  };
  const NextPicture = () => {
    if (currentPic !== 0) setCurrentPic(currentPic - 1);
    else setCurrentPic(images.length-1);
  };

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <CrossfadeImage
        style={{ height: "587px", width: "410px" }}
        src={images[0]}
      />

      <div
        style={{
          zIndex: "200",
          width: "600px",
          height: "230px",
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          position: "absolute",
          bottom: "1%",
        }}
      >
     <PrevArrow onClick={() => PrevPicture()}/>

        {images.map((item, index) =>
          index !== 0 ? (
            <CrossfadeImage
              style={{ height: "215px", width: "157px" }}
              src={item}
              key={index}
            />
          ) : null
        )}
     <NextArrow onClick={() => NextPicture()}/>

      </div>
    </div>
  );
};

export default Carrousell;
