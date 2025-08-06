import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/data/navigationData';
import FamuqueUser from "@/assets/logos/famuque-user.svg?react";
import FamuqueSearch from "@/assets/logos/famuque-search.svg?react";
import FamuqueCart from "@/assets/logos/famuque-cart.svg?react";
import { FamuqueButton } from '@/components/FamuqueButton';
import { ROUTES } from '@/router/routes';

interface FamuqueNavBarProps {
  showAccountButtons?: boolean;
  showLogin?: boolean;
  showSearch?: boolean;
  showCart?: boolean;
  absolute?: boolean;
}

export function FamuqueNavBar({showAccountButtons= true,  showLogin = true, showSearch = true, showCart = true, absolute = false }: FamuqueNavBarProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`z-20 w-full flex flex-col ${absolute ? "absolute" : ""} items-center transition-colors duration-300 bg-white`}>
      <nav className="w-full max-w-screen-desktop flex flex-row justify-between m-std-3 px-std-1-desktop">
        <FamuqueButton
          variant='secondary'
          className='z-20'
          labelClassName='text-4xl font-avenir-heavy'
          onClick={() => navigate(ROUTES.STATIC.HOME)}
        >
          famuque
        </FamuqueButton>
        <div className="flex items-center tablet:hidden">
          <FamuqueButton
            variant='secondary'
            className='z-20'
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </FamuqueButton>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute left-0 top-0 h-[100vh] w-full"
              >
                <div className="bg-white flex flex-col items-end pt-comp-2-desktop pb-comp-2 gap-comp-1 text-dh4 px-std-1-desktop">
                  {Navigation.map((item) => (
                    <FamuqueButton
                      key={item.title}
                      onClick={() => navigate(item.link)}
                      variant='secondary'
                    >
                      {item.title}
                    </FamuqueButton>
                  ))}
                </div>
                <div className="h-full" onClick={() => setIsOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="hidden tablet:flex gap-comp-2 laptop:gap-comp-2-desktop">
          {Navigation.map((item) => (
            <FamuqueButton
              key={item.title}
              variant="secondary"
              onClick={() => navigate(item.link)}
            >
              {item.title}
            </FamuqueButton>
          ))}
        </div>
        {showAccountButtons && (
          <div className="hidden tablet:flex gap-std-3-desktop">
            {showLogin && (
              <FamuqueButton
              variant="secondary"
                onClick={() => navigate(ROUTES.STATIC.LOGIN)}
                >
                <FamuqueUser className="w-6 h-6" />
              </FamuqueButton>
            )}
            {showSearch && (
              <FamuqueButton
              variant="secondary"
              onClick={() => navigate(ROUTES.STATIC.SEARCH)}
              >
                <FamuqueSearch className="w-6 h-6" />
              </FamuqueButton>
            )}
            {showCart && (
              <FamuqueButton
              variant="secondary"
              onClick={() => navigate(ROUTES.STATIC.CART)}
              >
                <FamuqueCart className="w-6 h-6" />
              </FamuqueButton>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
