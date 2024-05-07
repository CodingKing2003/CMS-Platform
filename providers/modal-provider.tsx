"use client";
import StoreModal from '@/components/modals/store-modal';
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
    const [isMounted,setIsMouned]=useState(false);

    useEffect(()=>{
        setIsMouned(true);
    },[])

    if(!isMounted){
        return null;
    }
  return (
   <>
   <StoreModal />
   </>
  )
}

export default ModalProvider