import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage.js';



function App() {

    return (
        <div className="App crt">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
