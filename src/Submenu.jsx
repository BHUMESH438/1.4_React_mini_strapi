import { useRef } from 'react';
import { globalContext } from './context';
import sublinks from './data';

const Submenu = () => {
  const { pageId, setPageId } = globalContext();
  //initially the current pageid is null and when user selects the submenu then the pageid will be fixed so the submenu screen will be on the screen so we must change the current pageId to null so that when we hover the submenu will appear and when we dont hover it will not appear - this functionallity is to reset the value to null when the curser is outside of the submenu
  const currentPage = sublinks.find(item => {
    return item.pageId === pageId;
  });
  //if you put curly braces you should return or avid the curly braces and be a one liner
  console.log('s>>>>>>>>>>>>>>>>', pageId);
  console.log(currentPage?.links);

  const submenuContainer = useRef(null); //will not change the state value
  const handleMouseLeave = event => {
    const submenu = submenuContainer.current; //show the current return of the componenet whenever the curser enters the white submenu container
    const { clientX, clientY } = event;
    // console.log(clientX, clientY);
    // we are doing this event to ocuur all three sides except top
    const { left, right, bottom } = submenu.getBoundingClientRect();
    // console.log(submenu.getBoundingClientRect());
    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    } // setPageId(null);
  };
  return (
    <div className={currentPage ? 'submenu show-submenu' : 'submenu'} onMouseLeave={handleMouseLeave} ref={submenuContainer}>
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns: currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr'
        }}
      >
        {currentPage?.links?.map(link => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
