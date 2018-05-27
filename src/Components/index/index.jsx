import React, {Component} from 'react'
import './index.less'
import {Row, Col} from 'antd'

import WRAPPER_LOGO from '@img/head.png'

import ArtiBox from "../../Modules/arti_box/arti_box";
import Aside from "../../Modules/aside/aside";

export default class Index extends Component {
  state = {
    position: ''
  };
  componentDidMount() {
    this.refs.wrapper.style.height = window.innerHeight + 'px';
    window.addEventListener('scroll', this.scroll)
  }
  scroll = (e) => {
    const scrollTop = e.srcElement.scrollingElement.scrollTop;
    if (scrollTop <= 100) {
      this.setState({
        position: '0_100'
      })
    }else {
      this.setState({
        position: '100_infinity'
      })
    }
  };
  render() {
    return (
      <div>
        <Row>
          <Col span={24} className={"head"} style={{background: this.state.position === '100_infinity' ? '#fff' : ''}}>
            <section className="nav">
              <span className="title">FECHBLUE's Blog</span>
              <ul className="nav-bar">
                <li>
                  <a href="#" style={{color: this.state.position === '100_infinity' ? 'grey' : ''}}>首页</a>
                </li>
                <li>
                  <a href="#" style={{color: this.state.position === '100_infinity' ? 'grey' : ''}}>关于</a>
                </li>
                <li>
                  <a href="#" style={{color: this.state.position === '100_infinity' ? 'grey' : ''}}>归档</a>
                </li>
                <li>
                  <a href="#" style={{color: this.state.position === '100_infinity' ? 'grey' : ''}}>联系我</a>
                </li>
              </ul>
            </section>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="wrapper" ref={"wrapper"}>
              <div className="wrapper-cont">
                <p className="wrapper-img">
                  <img src={WRAPPER_LOGO} alt="WRAPPER_LOGO"/>
                </p>
                <p className="wrapper-intro">探索、记录、分享、生活</p>
                <p className="wrapper-line">
                  <span></span>
                </p>
                <p className="wrapper-name" style={{marginTop: '2%'}}>
                  Web Developer By FechBlue
                </p>
                <p className="wrapper-btn">
                  <a href="#">关于我更多</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{background: '#dddddd'}}>
            <Row className="content">
              <p className="recent-article">最近的文章</p>
              <Col xl={18} xs={24} style={{padding: '0 2%'}}>
                <ArtiBox/>
                <ArtiBox/>
                <ArtiBox/>
              </Col>
              <Aside/>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}