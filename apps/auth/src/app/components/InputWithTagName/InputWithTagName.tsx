import { Input, InputProps } from "antd";
import React from "react";
import './InputWithTagName.scss';

type InputWithTagNameProps = InputProps & {
    tagName?: string;
    type?: string;
    tagnameStyle?: React.CSSProperties | string;
};

const InputWithTagName = ({ tagName, tagnameStyle, type, style, ...restProps }: InputWithTagNameProps) => {

    const isStyleObject = typeof tagnameStyle === "object";

    return (
        <div className="input-with-tagname-wrapper">
            {tagName && (
                <span
                    className={`input-tagname ${!isStyleObject && tagnameStyle ? tagnameStyle : ""}`}
                    style={isStyleObject ? tagnameStyle : undefined}
                >
                    {tagName}
                </span>
            )}

            {type === 'password'
                ? (
                    <Input.Password
                        {...restProps}
                        style={{ width: "100%", ...style }}
                    />
                )
                : (
                    <Input
                        {...restProps}
                        style={{ width: "100%", ...style }}
                    />
                )
            }
        </div>
    );
};

export default InputWithTagName;
