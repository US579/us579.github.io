import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IconWrapper } from './styles';

export const LinkedIn = () => {
    return (
      <IconWrapper>
        <a href="https://www.linkedin.com/in/steven-liu-08b330159/">
          <FaLinkedin size={24} color='grey'/>
        </a>
      </IconWrapper>
    );
};

