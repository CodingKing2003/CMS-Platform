import { UserButton } from '@clerk/nextjs'
import React from 'react'

const SetupPage = () => {
  return (
    <div className='p-4'>
      <UserButton afterSignOutUrl='/sign-in' />

    </div>
  )
}

export default SetupPage