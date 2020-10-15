import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import servicePath  from '../config/apiUrl'
import Link from 'next/link'
import Head from 'next/head'
import {Row, Col, List} from 'antd'
import { CalendarOutlined, YoutubeOutlined, FireOutlined } from '@ant-design/icons';
import Header from '../components/Header'
const MyList = (list) => {
  const [ mylist , setMylist ] = useState(list.data);
  useEffect(()=>{
    setMylist(list.data)
   })
  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                    <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><CalendarOutlined />{item.publishTime}</span>
                  <span><YoutubeOutlined /> {item.typeName}</span>
                  <span><FireOutlined /> {item.view_count} views</span>
                </div>
                <div className="list-context">{item.introduce}</div>  
              </List.Item>
            )}
          />  
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          right-list
        </Col>
      </Row>
    </>
  )
  }

  MyList.getInitialProps = async (context)=>{

  let id =context.query.id
  const promise = new Promise((resolve)=>{
    axios(servicePath.getListById + id).then(
      (res)=>resolve(res.data)
    )
  })
  return await promise
}
export default MyList