import React from "react";
import { Input, InputProps } from "antd";
import "./InputWithTagName.scss";

type InputVariant = "outlined" | "filled";

export interface InputWithTagNameProps extends InputProps {
    /** Label hiển thị phía trên input */
    tagName?: string;

    /** Class custom cho label */
    tagnameStyle?: string;

    /** Variant custom (optional – dùng cho SCSS) */
    variant?: InputVariant;
}

const InputWithTagName: React.FC<InputWithTagNameProps> = ({
    tagName,
    tagnameStyle,
    variant = "outlined",
    type,
    className,
    style,              // ✅ nhận style
    ...restProps
}) => {
    const wrapperClass = [
        "input-with-tagname",
        `variant-${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const InputComponent =
        type === "password" ? Input.Password : Input;

    return (
        <div className={wrapperClass} style={style}> {/* ✅ apply style */}
            {tagName && (
                <span className={`input-tagname ${tagnameStyle || ""}`}>
                    {tagName}
                </span>
            )}

            <InputComponent {...restProps} />
        </div>
    );
};


export default InputWithTagName;
