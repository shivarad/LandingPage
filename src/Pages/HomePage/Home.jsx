import { PageWrapper, Contents, LeftContents } from "./HomeStyles";
import BackgroundImg from "../../Components/Background/background";
import Header from "../../Components/Header/header";
import CustomBtn from "../../Components/CustomButton/customBtn";
import Carrousell from "../../Components/Carrousell/carousell";

const Home = () => {
  return (
    <PageWrapper>
      <BackgroundImg />
      <Header />
      <Contents>
        <LeftContents>
          <p
            style={{
              color: "#DC00BE",
              textShadow: "0px 0px 7px #DC00BE",
              fontSize: "45px",
              fontWeight: "400",
            }}
          >
            Introducing <span style={{ fontWeight: "600" }}>YESPORTS</span>
          </p>
          <div
            style={{
              fontWeight: "500",
              fontSize: "60px",
              color: "#FFFFFF",
              lineHeight: "64px",
              textShadow: "0px 0px 10px #DC00BE",
            }}
          >
            <p>Get Closer to your Favorite esports teams.</p>
          </div>
          <p
            style={{
              fontSize: "32px",
              lineHeight: "40px",
              color: "#5243FE",
            }}
          >
            All YESPORTS NFTS grant access to the Metaverse.
          </p>
          <CustomBtn inverted="ture" text="View Pack"/>
        </LeftContents>
        <LeftContents>
          <Carrousell/>
        </LeftContents>
      </Contents>
    </PageWrapper>
  );
};

export default Home;
