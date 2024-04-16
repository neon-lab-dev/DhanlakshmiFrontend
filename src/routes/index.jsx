import { lazy } from 'react';

export const ROUTES = [
  {
    path: '/',
    component: lazy(() => import('../pages/Landing')),
  },
  {
    path: '/products',
    component: lazy(() => import('../pages/Product')),
  },
  {
    path: '/seller',
    component: lazy(() => import('../pages/Seller')),
  },
];
