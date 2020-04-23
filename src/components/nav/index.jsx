import React, { Component } from 'react'
import {Menu} from 'antd'
import MenuConfig from './../../config/menuConfig'
import {NavLink} from 'react-router-dom'
const {SubMenu} =Menu
export default class Nav extends Component {
 Menus=(data)=>{
      return  data.map(item=>{
            if(item.children){
            return <SubMenu key={item.key} title={item.title}>{this.Menus(item.children)}</SubMenu>
            }
        return <Menu.Item key={item.key}><NavLink to={"/admin"+item.key}>{item.title}</NavLink></Menu.Item>
        })
    }
    render() {  
        return (
            <div>
               <Menu theme="dark" mode="vertical">
                     {   
                         this.Menus(MenuConfig)
                     }
               </Menu>
            </div>
        )
    }
}
