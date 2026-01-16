'use client'
import React, { useState } from "react";
import './my-profile.scss';
import { Input, Button, Avatar } from "antd";
import { GetProps } from "antd";
import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { FittoryLogo } from "@repo/ui/images/FittoryLogo";
import { PlaceholderAvatar } from "../../assets/images/placeholder-avatar";
import InputWithTagName from "@/app/components/InputWithTagName/InputWithTagName";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

const searchPrefix = (
    <SearchOutlined style={{ fontSize: 16, color: "#ADA7A7", marginInline: 10 }} />
);

export default function MyProfilePage() {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((prev) => !prev);
    };

    return (
        <div className="my-profile-page-container">

            {/* ---------------- HEADER ---------------- */}
            <div className="header-section">

                {/* LEFT */}
                <div className="header-left">
                    <div style={{ fontSize: "1rem", fontWeight: 600 }}>Welcome Username</div>
                    <div style={{ fontSize: "0.75rem", color: "#ADA7A7" }}>Mon, 08 December 2025</div>
                </div>

                {/* CENTER LOGO */}
                <FittoryLogo style={{ height: 100 }} />

                {/* RIGHT */}
                <div className="header-right">
                    <Input style={{ width: "50%" }} prefix={searchPrefix} placeholder="Search..." />
                    <Button
                        className="bell-button"
                        icon={<BellOutlined className="bell-icon" />}
                        type="link"
                    />
                    <Button
                        className="user-button"
                        icon={<UserOutlined className="user-icon" />}
                        type="primary"
                    />
                </div>
            </div>

            {/* ---------------- BODY ---------------- */}
            <div className="body-section">

                {/* Top Banner */}
                <div className="head-banner" />

                {/* Avatar + Email */}
                <div className="fixed-info-wrapper">
                    <div className="avatar-and-email">
                        <Avatar className="avatar">
                            <PlaceholderAvatar />
                        </Avatar>

                        <div className="email-section">
                            <div style={{ fontSize: "1rem", fontWeight: 600 }}>Username</div>
                            <div style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.5)" }}>
                                username@gmail.com
                            </div>
                        </div>
                    </div>

                    {/* Edit / Save Button */}
                    <Button type="primary" style={{ paddingInline: "2%" }} onClick={handleEditClick}>
                        {isEditing ? "Save" : "Edit"}
                    </Button>
                </div>

                {/* Form Section */}
                <div className="form-section">
                    <div className="form-vertical-divider">
                        <InputWithTagName tagName="First Name" size="large" tagnameStyle='tagname-style' disabled={!isEditing} variant="outlined" placeholder="Username First Name" />
                        <InputWithTagName tagName="Phone Number" size="large" tagnameStyle='tagname-style' disabled={!isEditing} variant="outlined" placeholder="+1234567890" />
                        <InputWithTagName tagName="Country" size="large" tagnameStyle='tagname-style' disabled={!isEditing} variant="outlined" placeholder="Country" />
                        <InputWithTagName tagName="Postal Code" size="large" tagnameStyle='tagname-style' disabled={!isEditing} variant="outlined" placeholder="00000" />
                    </div>

                    <div className="form-vertical-divider">
                        <InputWithTagName tagName="Last Name" size="large" tagnameStyle='tagname-style' disabled={!isEditing} variant="outlined" placeholder="Username Last Name" />
                        <InputWithTagName tagName="Email" size="large" tagnameStyle='tagname-style' disabled={!isEditing} variant="outlined" placeholder="username@gmail.com" />
                        <InputWithTagName tagName="Company" size="large" tagnameStyle='tagname-style' disabled={!isEditing} variant="outlined" placeholder="---" />
                        <InputWithTagName tagName="City" size="large" tagnameStyle='tagname-style' disabled={!isEditing} variant="outlined" placeholder="Ho Chi Minh" />
                    </div>
                </div>

                {/* Address Input */}
                <div className="address-input">
                    <InputWithTagName
                        style={{ width: "100%" }}
                        tagName="Address"
                        size="large"
                        tagnameStyle="tagname-style"
                        disabled={!isEditing}   // bật/tắt theo trạng thái edit
                        variant="outlined"
                        placeholder="123 Street, Ward, District"
                    />
                </div>
                <Button
                    type="primary"
                    size="large"
                    variant="solid"
                    color="danger">Sign Out</Button>
            </div>
        </div>
    );
}
