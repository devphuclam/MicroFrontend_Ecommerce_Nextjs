'use client'
import React from "react";
import Image from "next/image";
import './login.scss';
import { IllustrationImage } from "../../assets/images/index";
import { Checkbox, Button } from "antd";
import { GoogleIcon } from "@/app/assets/icons/GoogleIcon";
import InputWithTagName from "@/app/components/InputWithTagName/InputWithTagName";
import { FittoryLogo } from '@repo/ui/images/FittoryLogo';

export default function LoginPage() {
    return (
        <div className="login-page-container">
            <div className="form-section">
                <div className="form-container">

                    <div className="form-header-section">

                        <div style={{ fontSize: "4.5rem", fontWeight: '500', lineHeight: "100%" }}>Welcome Back</div>
                        <div style={{ fontSize: "2rem", fontWeight: '300', color: "#636364" }}>Welcome Back! Please enter your details.</div>
                    </div>
                    <div className="form-input-section">
                        <InputWithTagName tagName="Email" variant="outlined" size="large" placeholder="Enter your Email" style={{ padding: "1rem", boxShadow: ' 5 5 5', height: "3vw", fontSize: '1.5rem' }} />
                        <InputWithTagName tagName="Password" type="password" variant="outlined" size="large" style={{ padding: "1rem", boxShadow: ' 5 5 5', height: "3vw", fontSize: "1.5rem" }} />
                    </div>
                    <div className="form-options-section">
                        <Checkbox style={{ fontSize: "1.2rem", color: "#181818", lineHeight: "100%", fontWeight: "600" }}>Remember me</Checkbox>
                        <Button variant="link" color="default" type="link" style={{ fontSize: "1.2rem", lineHeight: "100%", fontWeight: "600" }}>Forgot Password?</Button>
                    </div>
                    <div className="form-button-section">
                        <Button type="primary" size="large" variant="solid" color="danger" danger style={{ width: "100%", padding: "2rem", fontSize: "1.5rem", borderRadius: "20px" }}>Sign in</Button>
                        <Button type="default" icon={<GoogleIcon width={36} height={36} />} size="large" variant="outlined" color="default" style={{ width: "100%", padding: "2rem", fontSize: "1.5rem", borderRadius: "20px", fontWeight: "600" }}>Sign in with Google</Button>
                    </div>
                    <div className="form-footer-section">
                        <div style={{ fontSize: "1.2rem", color: "#636364", fontWeight: "500" }}>Don't have an account? <Button variant="link" color="default" type="link" style={{ fontSize: "1.2rem", fontWeight: "600" }}>Sign up</Button></div>
                    </div>

                </div>

            </div>
            <div className="illustration-section">
                <IllustrationImage width={'w-full'} height={'99vh'} style={{ margin: '0' }} />
            </div>


        </div>
    )
} 