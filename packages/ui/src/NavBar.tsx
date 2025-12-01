/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import './NavBar.scss';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FittoryLogo } from './images';

type NavBarProps = {
  message?: string;
};

const NavBar = ({ message }: NavBarProps) => {
  return (
    <div className='navbar-container'>
      <div className='navbar-top'>
        <p>{message}</p>
      </div>

      <div className='navbar-bottom'>
        {/* LEFT — Logo */}
        <div className='navbar-left'>
          <FittoryLogo width={120} height={'100%'} />
        </div>

        {/* CENTER — Menu */}
        <div className='navbar-center'>
          <div className='navbar-item'>Store</div>
          <div className='navbar-item'>Account</div>
          <div className='navbar-item'>Cart</div>
          <div className='navbar-item'>About Us</div>
        </div>

        {/* RIGHT — Search */}
        <div className='navbar-right'>
          <Input
            placeholder='Search products...'
            prefix={<SearchOutlined />}
            className='navbar-search'
            allowClear
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
