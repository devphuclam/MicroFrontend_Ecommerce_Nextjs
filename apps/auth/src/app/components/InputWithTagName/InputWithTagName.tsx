import { Input, InputProps } from "antd";
import React from "react";
import './InputWithTagName.scss';
import SizeContext from "antd/es/config-provider/SizeContext";

type InputWithTagNameProps = InputProps & {
    tagName?: string;
    type?: string;
};

const InputWithTagName = ({ tagName, type, ...restProps }: InputWithTagNameProps) => {
    return (
        <div>
            {tagName && <span className="input-tagname">{tagName}</span>}
            {type === 'password' ? <Input.Password {...restProps} /> :
                <Input {...restProps} />}
        </div>
    )
};


export default InputWithTagName;