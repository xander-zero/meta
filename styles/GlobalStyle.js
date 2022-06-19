import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        direction:rtl;
        font-family:'IRANSans' !important;
    }
    h1,h2,h3,h4,h5,h6{
        margin:0;
        padding:0
    }
    ul{
        list-style:none
    }
    a{
        text-decoration:none
    }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ postion }) => (postion ? postion : "")};
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 995px) {
    justify-content: center !important;
  }
`;
