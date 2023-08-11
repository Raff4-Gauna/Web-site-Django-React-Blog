import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'


import Home from 'containers/pages/Home';
import Error404 from 'containers/Errors/Error404';
import Cases from 'containers/pages/Cases';
import Services from 'containers/pages/Services';
import Blog from 'containers/pages/Blog';
import About from 'containers/pages/About';
import Contact from 'containers/pages/Contact';
import Careers from 'containers/pages/Careers';

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes(){
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    {/* Error Display */}
                    <Route path="*" element={<Error404 />} />

                    {/* Home Display */}
                    <Route path="/" element={<Home />} />
                    <Route path="/Catálogo" element={<Cases />} />
                    <Route path="/Novedades" element={<Services />} />
                    <Route path="/Lookbook" element={<About />} />
                    <Route path="/Nosotros" element={<Careers />} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes