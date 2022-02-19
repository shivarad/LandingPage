import { ReactComponent as Logo } from "../../SvgFiles/logo.svg";
import { HeaderWrapper, OptionLinks } from "./headerStyles";
import SearchInput from "../SearchInput/searchInput";
import CustomBtn from "../CustomButton/customBtn";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <SearchInput />
      <OptionLinks>Marketplace</OptionLinks>
      <OptionLinks>Packs</OptionLinks>
      <OptionLinks>Metaverse</OptionLinks>
      <OptionLinks>Yesp Token</OptionLinks>
      <CustomBtn text="Connect"/>
    </HeaderWrapper>
  );
};

export default Header;
