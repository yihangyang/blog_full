import React, { useState } from 'react'
import Head from 'next/head'
import { List, Row, Col } from 'antd'
import { CalendarOutlined, StarTwoTone, YoutubeOutlined, FireOutlined } from '@ant-design/icons';

import Header from '../components/Header'
import Author from '../components/Author'
import Ad from '../components/Ad'
import Footer from '../components/Footer'

import '../static/style/pages/index.css'


export default function Home() {
  const [ mylist , setMylist ] = useState(
    [
      {title:'50',context:'50。'},
      {title:'React',context:'50。'},
      {title:'React',context:'50。'},
      {title:'React',context:'50。'},
     ]
  )
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        <div>    
          <List
            header={<div>Log</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><CalendarOutlined /> 2019-06-28</span>
                  <span><YoutubeOutlined /> Video</span>
                  <span><FireOutlined /> 5498 views</span>
                </div>
                <div className="list-context">{item.context}</div>  
              </List.Item>
            )}
          />    
        </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ad />
        </Col>
      </Row>
      <Footer />
      </div>
  )
}
