import styled from "styled-components";


export const ButtonWrapper=styled.button`
border: 1px solid #DC00BE;
box-shadow:  0px 0px 6px 0.2px #DC00BE;
width: 164px;
height: 43px;
color:${props=>props.inverted?"white":"#DC00BE"};
background:${props=>props.inverted? "linear-gradient(180deg, #DC00BE 0%, rgba(220, 0, 190, 0) 100%)":"black"};
display: flex;
flex-direction:row;
align-items: center;
justify-content: center;

`

export const ButtonText=styled.span`
flex:1;
font-weight: 500;
font-family:'Oxanium', cursive;
line-height: 20px;
`

