import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import CatalogPage from '@/pages/CatalogPage';
import AboutPage from '@/pages/AboutPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Bounce } from 'react-toastify';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/catalog" element={<CatalogPage/>} />
        <Route path="/about" element={<AboutPage/>} />
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