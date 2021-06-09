import React, { useState } from 'react'
import { FaToggleOff } from 'react-icons/fa';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, 
    SidebarLink, SideBtnWrap,SidebarRoute} 
from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
             <CloseIcon/>
            </Icon>
            <SidebarMenu>
             <SidebarLink to="/"> Pizzas</SidebarLink>
             <SidebarLink to="/"> Desserts</SidebarLink>
             <SidebarLink to="/">Complete Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
             <SidebarRoute to="/"> Jetzt Bestellen</SidebarRoute>
            </SideBtnWrap>
            </SidebarContainer>
    )
}

export default Sidebar
