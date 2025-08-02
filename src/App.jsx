import React, { useState, useEffect } from 'react';
import './App.css';
import SprayLandingPage from './components/SprayLandingPage';
import ComingSoon from './components/ComingSoon';

const App = () => {
    const [currentHash, setCurrentHash] = useState(window.location.hash);
    
    useEffect(() => {
        // Disable scroll restoration globally
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
            // Scroll to top on any hash change
            window.scrollTo(0, 0);
        };
        
        // Initial scroll to top
        window.scrollTo(0, 0);
        
        window.addEventListener('hashchange', handleHashChange);
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
    
    const renderPage = () => {
        switch(currentHash) {
            case '#coming-soon':
                return <ComingSoon />;
            default:
                return <SprayLandingPage />;
        }
    };

    return (
        <div className="App">
            {renderPage()}
        </div>
    );
};

export default App;