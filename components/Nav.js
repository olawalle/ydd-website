/** @format */

import React from 'react'

import { Menu, Dropdown } from 'antd'

const menu = (
  <Menu>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.alipay.com/'>
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.taobao.com/'>
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

const Nav = () => {
  return (
    <header class='site-header'>
      <div class='container for-navi'>
        <div class='' style={{ display: 'inline-block' }}>
          <h1>
            <a href='https://demo.imithemes.com/adore-church-wp' title='Logo'>
              <div class=''>
                <img src='logo.png' alt='' style={{ height: '50px' }} />
              </div>{' '}
            </a>
          </h1>
        </div>
        <div className='navigation-links' style={{ float: 'right', display: 'inline-block' }}>
          <span>Home</span>
          <span>Devotionals</span>
          <span>Library</span>
          <Dropdown overlay={menu}>
            <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
              Hover me
            </a>
          </Dropdown>
        </div>
      </div>
    </header>
  )
}

export default Nav
