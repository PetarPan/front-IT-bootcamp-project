import React from 'react'
import * as AiIcons from 'react-icons/ai' 
import * as IoIcons from 'react-icons/io' 
import * as CgIcons from 'react-icons/cg' 

export const SidebarData = [
    {
        title: 'User',
        path: '/profile',
        icon: <CgIcons.CgProfile /> ,
        cName: 'nav-text'
    },
    {
        title: 'Consumption',
        path: '#',
        icon: <IoIcons.IoIosPaper /> ,
        cName: 'nav-text'
    },
    {
        title: 'Change Password',
        path: '#',
        icon: <AiIcons.AiOutlineSetting /> ,
        cName: 'nav-text'
    },
    {
        title: 'Manual',
        path: '#',
        icon: <IoIcons.IoIosPaper /> ,
        cName: 'nav-text'
    },
    {
        title: 'Log Out',
        path: '/',
        icon: <AiIcons.AiOutlineLogout /> ,
        cName: 'nav-text'
    }
]
