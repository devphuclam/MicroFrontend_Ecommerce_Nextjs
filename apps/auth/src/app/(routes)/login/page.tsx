'use client'
import React from "react";
import Image from "next/image";
import './login.scss';
import { IllustrationImage } from "../../assets/images/index";
import { Input } from 'antd';

export default function LoginPage() {
    return (
        <div className="login-page-container">
            <div className="form-section">
                <div className="form-header-section">
                    <div style={{ fontSize: "40px", fontWeight: '600', lineHeight: "100%" }}>Welcome Back</div>
                    <div>Welcome Back! Please enter your details.</div>
                </div>
                <Input size="large" placeholder="Email" style={{ marginBottom: '20px' }} variant="outlined" />
            </div>
            <div className="illustration-section">
                <IllustrationImage width={'w-full'} height={'99vh'} style={{ margin: '0' }} />
            </div>


        </div>
    )
} 