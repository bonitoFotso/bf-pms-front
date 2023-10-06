// assets
import { IconWallet, IconList, IconCreditCard } from '@tabler/icons';
// constant
const icons = {
  IconWallet,
  IconList,
  IconCreditCard
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const wallet = {
  id: 'wallet',
  title: 'Wallet',
  type: 'group',
  children: [
    {
      id: 'wallet-1',
      title: 'Wallet',
      type: 'item',
      url: '/wallet',
      icon: icons.IconWallet,
      breadcrumbs: false
    },
    {
      id: 'wallet-form',
      title: 'Wallet-form',
      type: 'item',
      url: '/wallet/wallet-form',
      icon: icons.IconCreditCard,
      breadcrumbs: false
    },
    {
      id: 'wallet-list',
      title: 'Wallet-list',
      type: 'item',
      url: '/wallet/wallet-list',
      icon: icons.IconList,
      breadcrumbs: false
    }
  ]
};

export default wallet;
