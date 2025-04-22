import React from 'react';
import { GithubIcon } from "../../icons/Github";
import { LinkedIn } from "../../icons/LinkedIn";
import {
    PageContainer,
    LinkContainer,
    GreetingContent,
    TextContent,
    AboutMeHeader,
    AboutMeContent,
} from "./styles";

const About = () => {
    return (
        <PageContainer>
            <GreetingContent>Hi, I'm Steven Liu </GreetingContent>
            <TextContent>
                I've always loved solving problems and being a technophile who
                was obsessed with the latest tech.
            </TextContent>
            <AboutMeHeader>About me</AboutMeHeader>
            <AboutMeContent>
                I am working as a software engineer and I live in Sydney,
                Australia.
            </AboutMeContent>
            <AboutMeContent>
                I usually code in Python, but I'm also interested in languages
                like TypeScript and Rust, as well as architectures like
                event-driven and serverless. I'm fascinated by creating
                automation, manipulating big data and developing user-friendly
                tools to make people's life easier.
            </AboutMeContent>
            <AboutMeContent>
            Although technology and tinkering are my passions and bring me a great sense of joy and pride, I also love playing basketball, traveling, and cooking—especially Chinese cuisine, which is my favorite.
            </AboutMeContent>
            <AboutMeContent>
                Feel free to reach me on{" "}
                <a href="mailto:wzus579@gmail.com">Email</a>.{" "}
            </AboutMeContent>
            <LinkContainer>
                <GithubIcon />
                <LinkedIn />
            </LinkContainer>
        </PageContainer>
    );
};

export default About;
