import { ReactComponent as Background } from "../../SvgFiles/background.svg";
import { ReactComponent as EllipseRight } from "../../SvgFiles/EllipseRight.svg";
import { ReactComponent as EllipseLeft } from "../../SvgFiles/EllipseLeft.svg";

const BackgroundImg = () => {
  return (
    <>
      <Background
        style={{ background: "black", width: "100%", height: "100%" }}
      />
      <EllipseLeft style={{ position: "absolute", left: 0, bottom: "10%" }} />
      <EllipseRight style={{ position: "absolute", right: 0, top: "10%" }} />
    </>
  );
};

export default BackgroundImg;
