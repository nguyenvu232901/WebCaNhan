import { Button, Input } from "antd";
import React from "react";
import {SearchOutlined} from '@ant-design/icons'

const ButtonInputSearch = (props) => {
    const{size, placeholder, textButton} = props
    return (
        <div style={{display: 'flex', gap:'1px'}}>
            <Input size={size} placeholder={placeholder} bordered={false} style={{backgroundColor: '#fff'}}/>
            <Button size={size} icon ={<SearchOutlined />} bordered={false}>{textButton}</Button>
        </div>
    );
}

export default ButtonInputSearch