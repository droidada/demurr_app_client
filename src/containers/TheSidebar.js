import React, { useContext } from 'react';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react';
import SidebarContext from '../context/SidebarContext';

import CIcon from '@coreui/icons-react';

// sidebar nav config
import navigation from './_nav';

const TheSidebar = () => {
  const { state, toggleSidebar } = useContext(SidebarContext);

  return (
    <CSidebar
      show={state.sidebarShow}
      onShowChange={(val) => toggleSidebar(val)}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <h2 className="c-sidebar-brand-full">Demurrage App</h2>
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
