import { IconListCheck, IconDetails } from '@tabler/icons';

// constant
const icons = {
    IconListCheck,
    IconDetails
  };

const categorie = {
    id:'categorie',
    title:'Categorie',
    type:'group',
    children:[
        {
            id: 'categorie-1',
            title: 'Liste des categorie',
            type: 'item',
            url: '/categorie-list',
            icon: icons.IconListCheck,
            breadcrumbs: false
        },

    ]
}

export default categorie;