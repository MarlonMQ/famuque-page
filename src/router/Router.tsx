import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import CatalogPage from "@/pages/CatalogPage";
// import AboutPage from "@/pages/AboutPage";
import ProductPage from "@/pages/ProductPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ComingSoonPage from "@/pages/ComingSoonPage";

const AppRouter = () => (
  <Router>
    <Routes>
      {import.meta.env.MODE === "development" ? (
        <>
          <Route path={ROUTES.STATIC.HOME} element={<HomePage />} />
          <Route path={ROUTES.STATIC.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES.STATIC.CATALOG} element={<CatalogPage />} />
          <Route path={ROUTES.STATIC.PRODUCT} element={<ProductPage />} />
          <Route path={ROUTES.STATIC.NOT_FOUND} element={<NotFoundPage />} />
        </>
      ) : (
        <Route path="*" element={<ComingSoonPage />} />
      )}
    </Routes>
  </Router>
);


export default AppRouter;
