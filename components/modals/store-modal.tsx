"use client";

import React from 'react'
import Modal from '../ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

const StoreModal = () => {

    const storeModal=useStoreModal();
  return (
    <Modal title='Create Store' description='Add a new store to manage products and categories' isOpen={storeModal.isOpen} onClose={storeModal.onClose} >
        Future
        </Modal>
  )
}

export default StoreModal