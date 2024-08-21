import { Col, Row } from "antd";
import React from "react";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import Search from "antd/es/transfer/search";
import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import { Color } from "antd/es/color-picker";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
const HeaderComponent = () => {
    return(
        <WrapperHeader gutter={16}>
            <Col span={6}>
                <WrapperTextHeader>CODE</WrapperTextHeader>
            </Col>
            <Col span={12}>
                <ButtonInputSearch 
                    size="large"
                    textButton = "Tìm kiếm"
                    placeholder="input search text" 
                // onSearch={onSearch}
                enterButton/>
            </Col>
            <Col span={6} style={{display: 'flex', gap: '20px', alignItems:'center'}}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '30px'}}></UserOutlined>
                    <div>
                        <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                        <div>
                            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                            <CaretDownOutlined />
                        </div>
                    </div>
                </WrapperHeaderAccount>

                <div>
                    <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/> 
                    <span style={{color: '#fff'}}>Giỏ hàng</span>
                </div>
            </Col>
        </WrapperHeader>
    )
}

export default HeaderComponent