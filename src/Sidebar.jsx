import { FaTimes } from 'react-icons/fa';
import { globalContext } from './context';
import sublinks from './data';
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = globalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <button className='close-btn ' onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>
        <div className='sidebar-links'>
          {sublinks.map(item => {
            const { links, page, pageId } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map(link => {
                    const { url, icon, label, id } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
