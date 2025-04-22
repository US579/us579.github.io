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

export const BlogPageContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 2%;
  margin-left: 8%;
  margin-right: 8%;
  place-items: left;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
  font-weight: 250;
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
// Blog cards container
export const BlogCardsContainer = styled.div`
    display: block;  /* Change from 'flex' to 'block' to make it stack vertically */
    padding: 0px;   /* Add padding for spacing from edges */
`;

// Individual blog card
export const BlogCard = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;         /* Increased padding for a longer card */
    margin-bottom: 0px;   /* Space between cards */
    width: 100%;           /* Make card take up full width */
    max-width: *0%;      /* Max width to control size */
    text-align: left;      /* Align text to the left */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

// Blog title (h2)
export const BlogTitle = styled.h2`
    font-size: 24px;    /* Increase font size for better readability */
    margin-bottom: 10px;
`;

// Blog description (p)
export const BlogDescription = styled.p`
    font-size: 16px;    /* Increase font size for better readability */
    color: #555;
    line-height: 1.6;   /* Add line height for readability */
`;


// Pagination container for the page buttons at the bottom
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;  // Add margin to prevent the buttons from sticking to the page bottom directly
  margin-top: auto;  // Ensures pagination stays at the bottom
`;

// Page button style
export const PageButton = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f4f4f4;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

// Search input style
export const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;