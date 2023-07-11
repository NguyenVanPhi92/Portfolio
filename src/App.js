import { useEffect, useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Footer from 'components/Footer'
import Preloader from 'components/Pre'
import NavBar from 'components/Navbar'
import ScrollToTop from 'components/ScrollToTop'

import About from 'pages/about/About'
import Home from 'pages/home/Home'
import Projects from 'pages/projects/Projects'
import Resume from 'pages/resume/ResumeNew'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './style.css'

function App() {
    const [load, upadateLoad] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false)
        }, 1200)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Router>
            <Preloader load={load} />
            <div className='App' id={load ? 'no-scroll' : 'scroll'}>
                <NavBar />
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/project' element={<Projects />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
