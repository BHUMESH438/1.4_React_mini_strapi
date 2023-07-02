import { FaBars } from 'react-icons/fa';
import { globalContext } from './context';
import Navlinks from './Navlinks';

const Navbar = () => {
  const { openSidebar, setPageId } = globalContext();
  const handleSubmenu = e => {
    // console.log(e.target);
    //if the mouse is not over the nav-link class and it is over the navbar or nav-center or any other class in navbar container then we should set the pageID to null in the context api
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars></FaBars>
        </button>
        <Navlinks />
      </div>
    </nav>
  );
};
export default Navbar;
