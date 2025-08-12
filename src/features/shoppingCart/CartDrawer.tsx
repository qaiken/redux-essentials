import React from 'react';

import BottomDrawer from '@/src/components/base/bottom-drawer/BottomDrawer';
import { useAppSelector } from '@/src/store/store';
import { selectTotalQuantity } from './shoppingCartSlice';

const CartDrawer: React.FC = () => {
  const totalQuantity = useAppSelector(selectTotalQuantity);

  return (
    <BottomDrawer content={totalQuantity ? `Cart (${totalQuantity})` : ''} />
  );
};

export default CartDrawer;
