export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'User',
    to: '/users',
    icon: 'cil-people',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Users',
        to: '/users',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Banks',
    to: '/banks',
    icon: 'cib-shopify',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Banks',
        to: '/banks',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tarrif',
        to: '/tarrif',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Shipping Companies',
    to: '/companies',
    icon: 'cil-restaurant',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Shipping Companies',
        to: '/companies',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Tasks',
    icon: 'cil-task',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Task Listing',
        to: '/tasks',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Task Category',
        to: '/tasks/category',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Task Equipments',
        to: '/tasks/equipments',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Task Qualifications',
        to: '/tasks/qualifications',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Requests',
    icon: 'cil-cash',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Requests',
        to: '/requests',
      },
    ],
  },
];
