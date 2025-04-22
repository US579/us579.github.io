import React from 'react';
import Image from '../assets/avator.png';
import { IconWrapper, ImageElement, StyledLink } from './styles';

const ImageIcon = () => {
  return (
    <IconWrapper>
      <StyledLink to="/">
        <ImageElement src={Image} alt="ImageIcon" />
      </StyledLink>
    </IconWrapper>
  );
};

export default ImageIcon;

