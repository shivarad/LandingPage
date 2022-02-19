import styled from "styled-components";
import CustomBtn from "../../Components/CustomButton/customBtn";

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Contents=styled.div`
position:absolute;
top:5%;
display:flex;
flex-direction:row;
justify-contents:space-between;
align-items:center;
padding:60px
`

export const LeftContents=styled.div`
display:flex;
flex-direction:column;
justify-contents:space-between;
width:50%;


`

export const ConnectBtn=styled(CustomBtn)`
color: white;
background:
  linear-gradient(180deg, #DC00BE 0%, rgba(220, 0, 190, 0) 100%);
`