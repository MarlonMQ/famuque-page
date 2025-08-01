export const ROUTES = {
  HOME: "/",
  CONTACT: "/contact",
  CATALOG: "/catalog",
  ABOUT: "/about",
  PRODUCT: "/product/:slug",
  NOT_FOUND: "*",

  LOGIN : "/login",
  SEARCH : "/search",
  CART : "/cart",

  // funciones para rutas dinámicas
  product: (slug: string) => `/product/${slug}`,
};
