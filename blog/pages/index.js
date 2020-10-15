import React, { useState } from 'react'
import Head from 'next/head'
import { List, Row, Col } from 'antd'
import { CalendarOutlined, LikeFilled, YoutubeOutlined, FireOutlined } from '@ant-design/icons';
import axios from 'axios'

import Header from '../components/Header'
import Author from '../components/Author'
import Ad from '../components/Ad'
import Footer from '../components/Footer'

import '../static/style/pages/index.css'


export default function Home(list) {
  const [ mylist , setMylist ] = useState(list.data);
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
                  <span><CalendarOutlined /> {item.addTime}</span>
                  <span><FireOutlined /> {item.typeName}</span>
                  <span><LikeFilled/> {item.view_count}人</span>
                </div>
                <div className="list-context">{item.introduce}</div>  
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

Home.getInitialProps = async () => {
  const promise = new Promise((resolve)=>{
    axios('http://127.0.0.1:7002/default/getArticleList').then(
      (res)=>{
        //console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}
