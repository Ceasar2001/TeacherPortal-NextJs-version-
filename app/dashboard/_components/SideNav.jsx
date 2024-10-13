"use client"

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Calendar, GraduationCap, Hand, LayoutIcon, School, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {

  const {user}=useKindeBrowserClient();

  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutIcon,
      path: '/dashboard'
    },
    {
      id: 2,
      name: 'Students',
      icon: GraduationCap,
      path: '/dashboard/students'
    },
    {
      id: 3,
      name: 'Attendance',
      icon: Calendar,
      path: '/dashboard/attendance'
    },
    {
      id: 4,
      name: 'Grades',
      icon: School,
      path: '/dashboard/grade'
    },
    {
      id: 5,
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings'
    }
  ]
  return (
    <div className='border shadow-md h-screen p-5'>

      <h1 className='text-red-700 font-bold text-md ml-6'>Teacher portal</h1>

      {/* <Image 
          src={'logo.svg'} 
          width={180} 
          height={50} 
          alt='logo'
        /> */}

        <hr className='my-5'/>

        {/* displaying google account user profile */}
        {menuList.map((menu, index) => (
          <h2 className='flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-primary hover:text-white cursor-pointer rounded-lg my-5'>
            <menu.icon />
            {menu.name}
          </h2>
        ))}

        <div className='flex gap-2 items-center bottom-5 fixed'>
          <Image 
            src={user?.picture} width={35}
            height={35}
            alt='user'
            className='rounded-full'
          />
          <div>
            <h2 className='text-sm font-bold'>{user?.given_name.name} {user?.family_name}</h2>
            <h2 className='text-xs  text-slate-400'>{user?.email}</h2>
          </div>
        </div>

        {/* end of user profile */}

    </div>

  )
}

export default SideNav