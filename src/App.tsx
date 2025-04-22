import {
    Route,
    Routes,
    HashRouter
} from "react-router-dom";
import About from "./components/pages/About";
import Header from "./components/Header";
import Blogs from "./components/pages/Blogs";
import React from 'react';
import BlogPage from "./components/pages/BlogPage";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" Component={About} />
                <Route path="/blogs" Component={Blogs} />
                <Route path="/blog/:id" element={<BlogPage />} />
            </Routes>
        </div>
    );
}

const AppWrapper = () => {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
};

export default AppWrapper;
