import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPageContainer } from "./styles";

// Import styled components
import { BlogCardsContainer, BlogCard, BlogTitle, BlogDescription, PaginationContainer, PageButton, SearchInput } from './styles';

// Sample blog data
const blogs = [
    { id: 1, title: "Understanding React", description: "A beginner's guide to React.", path: "/blog/1" },
    { id: 2, title: "Advanced JavaScript", description: "Deep dive into JavaScript features.", path: "/blog/2" },
    { id: 3, title: "CSS Grid vs Flexbox", description: "Comparing CSS Grid and Flexbox for layouts.", path: "/blog/3" },
    { id: 4, title: "Responsive Design", description: "Understanding the principles of responsive design.", path: "/blog/4" },
    { id: 5, title: "CSS Flexbox", description: "A deep dive into Flexbox.", path: "/blog/5" },
    { id: 6, title: "JavaScript ES6", description: "Learning the new features of ES6.", path: "/blog/6" },
    { id: 7, title: "React Hooks", description: "An introduction to React Hooks.", path: "/blog/7" },
    { id: 8, title: "State Management", description: "How to manage state in large apps.", path: "/blog/8" },
];


const postsPerPage = 5;

const Blogs = () => {
    // State for current page and search query
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter blogs based on search query
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate the index of the first and last post for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // Get the current posts slice based on the page and search query
    const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Generate page numbers (can customize as needed)
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredBlogs.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <BlogPageContainer>
            {/* Search Input */}
            <SearchInput
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />

            <BlogCardsContainer>
                {currentPosts.map(blog => (
                    <Link key={blog.id} to={blog.path} style={{ textDecoration: 'none' }}>
                        <BlogCard style={{ marginBottom: '20px' }}>
                            <BlogTitle>{blog.title}</BlogTitle>
                            <BlogDescription>{blog.description}</BlogDescription>
                        </BlogCard>
                    </Link>
                ))}
            </BlogCardsContainer>

            {/* Pagination Controls */}
            <PaginationContainer>
                {pageNumbers.map(number => (
                    <PageButton
                        key={number}
                        onClick={() => handlePageChange(number)}
                        disabled={currentPage === number}
                    >
                        {number}
                    </PageButton>
                ))}
            </PaginationContainer>
        </BlogPageContainer>
    );
};

export default Blogs;
