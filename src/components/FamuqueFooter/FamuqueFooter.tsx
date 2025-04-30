import { Navigation } from '@/data/navigationData';
import { copyToClipBoard } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

export function FamuqueFooter() {
  const navigate = useNavigate();

  const handleClick = (link: string): void => {
    navigate(link);
  };
  
  return (
    <>  
      <hr className="border-t border-gray-light w-full z-10" />
      <footer className=" text-black bg-white py-comp-2 desktop:py-comp-2-tablet px-std-3-desktop laptop:px-comp-3-desktop overflow-hidden w-full z-10 flex flex-col font-avenir-roman">
        <div className="flex sm:flex-row flex-col justify-between items-start gap-5 w-full">
          <button
            className="z-20 text-dh-2 font-avenir-heavy text-black cursor-pointer"
            onClick={() => navigate('/dev')}
          >
            famuque
          </button>
          <div className="w-fit mb-4 text-start ">
            <h5 className="text-th-5 mb-2 text-gray">Navegación</h5>
            <ul className="list-none">
              {Navigation.map((navigation, index) => (
                <li key={index}>
                  <a className="text-th-5 hover:underline cursor-pointer" onClick={() => handleClick(navigation.link)}>{navigation.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-fit mb-4 text-start">
            <h5 className="text-th-5 mb-2 text-gray">Contacto</h5>
            <ul className="list-none">
              <li><a className="text-th-5 cursor-pointer hover:underline " onClick={() => copyToClipBoard('k.emuva@hotmail.com', 'Email')}>Email: k.emuva@hotmail.com</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-light my-4 w-full " />
        <div className="my-10">
          <p className="text-th-5 ">&copy; {new Date().getFullYear()} Marlon Murillo Quesada. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
