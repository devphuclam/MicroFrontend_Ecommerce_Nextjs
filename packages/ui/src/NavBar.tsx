/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import './NavBar.scss';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FittoryLogo } from './images';

type NavBarProps = {
  message?: string;
  storeUrl?: string;
  accountUrl?: string;
  cartUrl?: string;
};

const NavBar = ({ message, storeUrl, accountUrl, cartUrl }: NavBarProps) => {
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
          <div
            className='navbar-item'
            onClick={() => window.location.assign(storeUrl || '/products')}
          >
            Store
          </div>
          <div
            className='navbar-item'
            onClick={() => window.location.assign(accountUrl || '/auth')}
          >
            Account
          </div>
          <div
            className='navbar-item'
            onClick={() => window.location.assign(cartUrl || '/cart')}
          >
            Cart
          </div>
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
