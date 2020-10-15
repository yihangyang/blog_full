import React from 'react'
import Head from 'next/head'
import {Row, Col, Breadcrumb, Affix } from 'antd'
import { CalendarOutlined, YoutubeOutlined, FireOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import Header from '../components/Header'
import Author from '../components/Author'
import Ad from '../components/Ad'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'



const Detailed = () => {
  let markdown='# P01:intro\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor is... \n\n' +
   '**this**\n\n' +
  '*this*`\n\n' +
  '***this***\n\n' +
  '~~this~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World this.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.a\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.a\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
  return (
    <>
      <Head>
        <title>Blog Detail</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                  <Breadcrumb.Item>video</Breadcrumb.Item>
                  <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                </Breadcrumb>
              </div>

             <div>
                <div className="detailed-title">
                This is a title
                </div>

                <div className="list-icon center">
                  <span><CalendarOutlined /> 2019-06-28</span>
                  <span><YoutubeOutlined /> Video</span>
                  <span><FireOutlined /> 5498 views</span>
                </div>

                <div className="detailed-content" >
                <ReactMarkdown 
                  source={markdown} 
                  escapeHtml={false}  
                />
                </div>

             </div>

            </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ad />
            <Affix offsetTop={5}>
              <div className="detailed-nav comm-box">
                <div className="nav-title">Artical Nav</div>
                  <MarkNav
                    className="article-menu"
                    source={markdown}

                    ordered={false}
                  />
              </div>
          </Affix>
        </Col>
      </Row>
      <Footer/>
   </>
)}

export default Detailed