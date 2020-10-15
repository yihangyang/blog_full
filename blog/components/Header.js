import React ,{ useState,useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath  from '../config/apiUrl'

import '../static/style/components/header.css'

import { Row,Col, Menu } from 'antd'
import { HomeOutlined, YoutubeOutlined, LikeFilled } from '@ant-design/icons';
const Header = () => {
  const [navArray , setNavArray] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      const result= await axios(servicePath.getTypeInfo).then(
        (res)=>{
          setNavArray(res.data.data)
          return res.data.data
          }
        )
      setNavArray(result)
    }
    fetchData()
  },[])
  const handleClick = (e)=>{
    if(e.key==0){
        Router.push('/')
    }else{
        Router.push('/list?id='+e.key)
    }
  }
  return (
    <div className="header">
      <Row type="flex" justify="center">
          <Col  xs={24} sm={20} md={10} lg={14} xl={11}>
              <span className="header-logo">LOGO</span>
              <span className="header-txt">make life better</span>
          </Col>

          <Col className="memu-div"  xs={0} sm={0} md={14} lg={10} xl={7}>
              <Menu mode="horizontal" onClick={handleClick}>
                  <Menu.Item key="0">
                    <HomeOutlined />
                    Home
                  </Menu.Item>
                  {
                    navArray.map((item)=>{
                    return(
                        <Menu.Item key={item.id}>
                            {/* {item.id === 1 ?? <HomeOutlined />}
                            {item.id === 2 ?? <HomeOutlined />}
                            {item.id === 3 ?? <HomeOutlined />} */}
                            <HomeOutlined />
                            {/* {console.log(item.id)}
                            {console.log("*****************************")} */}
                            {item.typeName}
                        </Menu.Item>
                    )
                    }) 
                  }
              </Menu>
          </Col>
      </Row>
  </div>
)}




export default Header