import { IconListCheck } from '@tabler/icons';

// constant
const icons = {
    IconListCheck,
  };

const tache = {
    id:'tache',
    title:'Taches',
    type:'group',
    children:[
        {
            id: 'tache1-1',
            title: 'Liste des Taches',
            type: 'item',
            url: '/tache-list',
            icon: icons.IconListCheck,
            breadcrumbs: false
        }
    ]
}

export default tache;