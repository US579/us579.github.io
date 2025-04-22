import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IconWrapper } from './styles';

export const GithubIcon = () => {
    return (
      <IconWrapper>
        <a href="https://github.com/us579">
          <FaGithub size={24} color='grey'/>
        </a>
      </IconWrapper>
    );
};

