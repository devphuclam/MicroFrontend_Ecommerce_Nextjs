'use client'
import React from "react";
import Image from "next/image";
import './sign-up.scss';
import { IllustrationImage } from "../../assets/images/index";
import { Checkbox, Button } from "antd";
import { GoogleIcon } from "@/app/assets/icons/GoogleIcon";
import InputWithTagName from "@/app/components/InputWithTagName/InputWithTagName";
import { FittoryLogo } from '@repo/ui/images/FittoryLogo';

export default function SignUpPage() {
    return (
        <div className="sign-up-page-container">
            <div className="form-section">
                <div className="form-container">

                    <div className="form-header-section">
                        <FittoryLogo width={'auto'} height={150} />
                        <div style={{ fontSize: "2rem", fontWeight: '500', lineHeight: "100%" }}>Join Our Fittory Family</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: '300', color: "#636364" }}>We're excited to have you! Sign up is quick and easy.</div>
                    </div>
                    <div className="form-input-section">
                        <InputWithTagName tagName="Email" variant="outlined" size="large" placeholder="Enter your Email" style={{ padding: "1rem", boxShadow: ' 5 5 5', height: "3vw", fontSize: '1rem' }} />
                        <InputWithTagName tagName="Password" type="password" variant="outlined" size="large" placeholder="******" style={{ padding: "1rem", boxShadow: ' 5 5 5', height: "3vw", fontSize: "1rem" }} />
                        <InputWithTagName tagName="Confirm Password" type="password" variant="outlined" size="large" placeholder="******" style={{ padding: "1rem", boxShadow: ' 5 5 5', height: "3vw", fontSize: "1rem" }} />
                    </div>
                    <div className="form-button-section">
                        <Button type="primary" size="large" variant="solid" color="danger" danger style={{ width: "100%", padding: "1.5rem", fontSize: "1.2rem", borderRadius: "20px" }}>Sign up</Button>
                        <Button type="default" icon={<GoogleIcon width={24} height={24} />} size="large" variant="outlined" color="default" style={{ width: "100%", padding: "1.5rem", fontSize: "1.2rem", borderRadius: "20px", fontWeight: "600" }}>Sign up with Google</Button>
                    </div>




                </div>

            </div>
            <div className="illustration-section">
                <IllustrationImage width={'w-full'} height={'99vh'} style={{ margin: '0' }} />
            </div>


        </div>
    )
} 