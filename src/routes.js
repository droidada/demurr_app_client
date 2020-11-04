import { lazy } from 'react';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Users = lazy(() => import('./pages/users/Users'));
const Store = lazy(() => import('./pages/stores/store/Store'));
const Bank = lazy(() => import('./pages/banks/Bank'));
const Tarrif = lazy(() => import('./pages/banks/Tarrif'));
const Request = lazy(() => import('./pages/requests/Request'));
const EditStore = lazy(() => import('./pages/stores/store/EditStore'));

const Transactions = lazy(() => import('./pages/transactions/Transactions'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/stores', exact: true, name: 'Stores', component: Store },
  { path: '/banks', exact: true, name: 'Banks', component: Bank },
  { path: '/requests', exact: true, name: 'Requests', component: Request },
  { path: '/tarrif', exact: true, name: 'Tarrif', component: Tarrif },
  
  
  // {
  //   path: '/stores/:id/edit',
  //   exact: true,
  //   name: 'Edit Store',
  //   component: EditStore,
  // },

];

export default routes;
