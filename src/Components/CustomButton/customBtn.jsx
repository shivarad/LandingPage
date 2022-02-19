import {ReactComponent as ArrowIcon} from "../../SvgFiles/ArrowIcon.svg";
import { ButtonText, ButtonWrapper } from "./customBtnStyles";

const CustomBtn = ({inverted=false,text}) => {
  return (
    <ButtonWrapper inverted={inverted} >
      <ButtonText>{text}</ButtonText>
      <ArrowIcon fill={inverted?"white":"#DC00BE"}/>
    </ButtonWrapper>
  );
};

export default CustomBtn;
