import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, 
    SidebarLink, SideBtnWrap,SidebarRoute} 
from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
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
