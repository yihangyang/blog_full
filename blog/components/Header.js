import React from 'react'
import '../static/style/components/header.css'

import {Row,Col, Menu} from 'antd'
import { HomeOutlined, YoutubeOutlined, LikeFilled } from '@ant-design/icons';
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
            <span className="header-logo">LOGO</span>
            <span className="header-txt">make life better</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item key="home">
                  <HomeOutlined />
                  Home
                </Menu.Item>
                <Menu.Item key="video">
                  <YoutubeOutlined />
                  Video
                </Menu.Item>
                <Menu.Item key="life">
                  <LikeFilled/>
                  Article
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header