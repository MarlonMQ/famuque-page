import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import CatalogPage from '@/pages/CatalogPage';
import AboutPage from '@/pages/AboutPage';
import ComingSoonPage from '@/pages/ComingSoongPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';


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
        <Route path="/product/:slug" element={<ProductPage />} />
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