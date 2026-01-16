'use client'
import React from "react";
import Image from "next/image";
import './forgot-password.scss';
import { IllustrationImage } from "../../assets/images/index";
import { Checkbox, Button } from "antd";
import { GoogleIcon } from "@/app/assets/icons/GoogleIcon";
import InputWithTagName from "@/app/components/InputWithTagName/InputWithTagName";
import { FittoryLogo } from '@repo/ui/images/FittoryLogo';

export default function ForgotPasswordPage() {
    return (
        <div className="forgot-password-page-container">
            <div className="form-section">
                <div className="form-container">

                    <div className="form-header-section">
                        <FittoryLogo width={'auto'} height={150} />
                        <div style={{ fontSize: "2rem", fontWeight: '500', lineHeight: "100%" }}>Reset Your Password</div>
                        <div style={{ fontSize: "1.25rem", fontWeight: '300', color: "#636364" }}>Don’t worry — we’ll help you get back in.</div>
                    </div>
                    <div className="form-input-section">
                        <InputWithTagName tagName="Email" variant="outlined" size="large" placeholder="Enter your Email" />
                        <InputWithTagName tagName="Password" type="password" variant="outlined" size="large" placeholder="******" />
                        <InputWithTagName tagName="Confirm Password" type="password" variant="outlined" size="large" placeholder="******" />
                    </div>
                    <div className="form-button-section">
                        <Button type="primary" size="large" variant="solid" color="danger" danger style={{ width: "100%", padding: "1.5rem", fontSize: "1.2rem", borderRadius: "20px" }}>Submit</Button>
                        <Button type="default" size="large" variant="solid" color="blue" style={{ width: "100%", padding: "1.5rem", fontSize: "1.2rem", borderRadius: "20px", fontWeight: "600" }}>Sign in</Button>
                    </div>




                </div>

            </div>
            <div className="illustration-section">
                <IllustrationImage width={'w-full'} height={'99vh'} style={{ margin: '0' }} />
            </div>


        </div>
    )
} 