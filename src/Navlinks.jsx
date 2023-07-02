import { globalContext } from './context';
import sublinks from './data';

const Navlinks = () => {
  const { setPageId } = globalContext();
  return (
    <div className='nav-links'>
      {sublinks.map(item => {
        const { pageId, page } = item;
        return (
          <button key={pageId} className='nav-link' onMouseEnter={() => setPageId(pageId)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Navlinks;
