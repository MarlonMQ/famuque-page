import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import CatalogPage from '@/pages/CatalogPage';
import AboutPage from '@/pages/AboutPage';
import ComingSoonPage from '@/pages/ComingSoongPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductoPage';
import tempImage from "@/assets/temp/aspersor.jpg"


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Bounce } from 'react-toastify';

export default function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<ComingSoonPage/>} />
        <Route path="/dev" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/catalog" element={<CatalogPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/product" element={
          <ProductPage 
            name="Aspersor Plastico 1/2" 
            description="ASPERSOR PLST. 1/2  R/M, 10-13 MTS 1.150 A 1.190 L/H PRESION DE 1.5 A 3.5 BAR"
            price="CRC 2.500"
            image={tempImage}
            slug="aspersor-plastico-1-2"
          />
          } 
        />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        transition={Bounce}
      />
    </Router>
  )
}