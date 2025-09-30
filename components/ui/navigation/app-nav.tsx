import React from 'react'
import NavLogo from './nav-logo'
import UserButton from './user-button'
import { auth } from '@/server/auth'

const AppNav = async() => {
    const session = await auth();
    console.log(session);

  return (
      <div className='w-full h-16 border-b border-b-slate-200 flex items-center justify-between px-4'>
          <NavLogo />
          <UserButton user={session?.user} />
    </div>
  )
}

export default AppNav