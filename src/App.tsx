import {
    Route,
    Routes,
    HashRouter
} from "react-router-dom";
import About from "./components/pages/About";
import Header from "./components/Header";
import React from 'react';


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" Component={About} />
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
