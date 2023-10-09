import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const TacheList = Loadable(lazy(() => import('views/taches/liste')));
const CategorieListCreate = Loadable(lazy(() => import('views/categories/liste')));
const CategorieDetailView = Loadable(lazy(() => import('views/categories/detail')));
const ActiviteListCreate = Loadable(lazy(() => import('views/activites/liste')));
const ActiviteDetailView = Loadable(lazy(() => import('views/activites/detail')));
const TacheDetails = Loadable(lazy(() => import('views/taches/detail')));
// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const AgenceDetail =Loadable(lazy(() => import('views/agences/detail')));
const AppelantDetail  =Loadable(lazy(() => import('views/appelants/detail')));
const ClientDetail =Loadable(lazy(() => import('views/clients/detail')));
const AgenceListCreate =Loadable(lazy(() => import('views/agences/liste')));
const AppelantListCreate  =Loadable(lazy(() => import('views/appelants/liste')));
const ClientListCreate =Loadable(lazy(() => import('views/clients/liste')));
const TechnicienListCreate = Loadable(lazy(() => import('views/techniciens/liste')));
const TechnicienDetail = Loadable(lazy(() => import('views/techniciens/detail')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '/',
      children: [
        {
          path: 'agence-list',
          element: <AgenceListCreate />
        },
        {
          path: 'agence/:id', // Utilisez ':' pour capturer l'ID
          element: <AgenceDetail />
        }
      ]
    },
    {
      path: '/',
      children: [
        {
          path: 'technicien-list',
          element: <TechnicienListCreate />
        },
        {
          path: 'technicien/:id', // Utilisez ':' pour capturer l'ID
          element: <TechnicienDetail />
        }
      ]
    },
    {
      path: '/',
      children: [
        {
          path: 'appelant-list',
          element: <AppelantListCreate />
        },
        {
          path: 'appelant/:id', // Utilisez ':' pour capturer l'ID
          element: <AppelantDetail />
        }
      ]
    },
    {
      path: '/',
      children: [
        {
          path: 'client-list',
          element: <ClientListCreate />
        },
        {
          path: 'client/:id', // Utilisez ':' pour capturer l'ID
          element: <ClientDetail />
        }
      ]
    },
    
    {
      path: '/',
      children: [
        {
          path: 'tache-list',
          element: <TacheList />
        },
        {
          path: 'tache/:id',
          element: <TacheDetails />
        }
      ]
    },
    
    {
      path: '/',
      children: [
        {
          path: 'activite-list',
          element: <ActiviteListCreate />
        },
        {
          path: 'activite:id',
          element: <ActiviteDetailView />
        }
      ]
    },
    {
      path: '/',
      children: [
        {
          path: 'categorie-list',
          element: <CategorieListCreate />
        },
        {
          path: 'categorie/:id',
          element: <CategorieDetailView />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
