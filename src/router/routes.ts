export const ROUTES = {
  STATIC:{
    HOME: "/",
    
    CONTACT: "/contact",
    CATALOG: "/catalog",
    ABOUT: "/about",
    PRODUCT: "/product/:slug",
    NOT_FOUND: "*",

    LOGIN: "/login",
    SEARCH: "/search",
    CART: "/cart",
  },

  DYNAMIC: {
    product: (slug: string) => `/product/${slug}`,
  },
};
