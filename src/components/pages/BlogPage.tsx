// BlogPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from './styles';
import { BlogTitle, BlogDescription } from './styles';

const blogData = [
    { id: 1, title: "Understanding React", description: "A beginner's guide to React.", content: "Detailed content for React." },
    { id: 2, title: "Advanced JavaScript", description: "Deep dive into JavaScript features.", content: "Detailed content for JavaScript." },
    { id: 3, title: "CSS Grid vs Flexbox", description: "Comparing CSS Grid and Flexbox.", content: "Detailed content for CSS." },
    { id: 4, title: "Responsive Design", description: "Responsive design principles.", content: "Detailed content for responsive design." },
    { id: 5, title: "CSS Flexbox", description: "Deep dive into Flexbox.", content: "Detailed content for Flexbox." },
    { id: 6, title: "JavaScript ES6", description: "New ES6 features.", content: "Detailed content for ES6." },
    { id: 7, title: "React Hooks", description: "Intro to React Hooks.", content: "Detailed content for Hooks." },
    { id: 8, title: "State Management", description: "Manage state in apps.", content: "Detailed content for state management." },
];

const BlogPage = () => {
    const { id } = useParams<{ id: string }>();
    const blog = blogData.find(b => b.id === Number(id));

    if (!blog) return <PageContainer>Blog not found.</PageContainer>;

    return (
        <PageContainer>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogDescription>{blog.description}</BlogDescription>
            <p>{blog.content}</p>
        </PageContainer>
    );
};

export default BlogPage;
