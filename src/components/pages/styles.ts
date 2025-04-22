import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;      /* Keeps vertical alignment centered */
  justify-content: flex-start;  /* Aligns child components to the left */
`;

export const PageContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 5%;
  margin-left: 15%;
  margin-right: 15%;
  place-items: left;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
  font-weight: 510;
`;

export const GreetingContent = styled.div`
  font-size: 2.75rem;
  line-height: 2.5rem;
  font-weight: 650;
  margin-top: 36px;
  margin-bottom: 2rem;
  text-align: left;
  width: 100%;
`;

export const TextContent = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding-bottom: 0.625rem;
    margin-top: 1rem;
    font-family: 'Jost',sans-serif;
    text-align: left;
    width: 100%;
    
`;

export const AboutMeHeader = styled.div`
  margin-top: 2.5rem;
  font-size: 2.8rem;
  line-height: 2.5rem;
  font-weight: 600;
  text-align: left;
  margin-bottom: 2rem;
  width: 100%;
`;

export const AboutMeContent = styled.div`
  width: 100%;
  margin: 1rem 0 0 0; /* top margin only */
  padding-bottom: 0.625rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-family: 'Jost', sans-serif;
  text-align: left;
`;


export const ImageWrapper = styled.img`
  float: left;
  margin-right: 1.25rem;
  width: 200px;
  height: auto;
  margin-top: 1.25rem;
`;
