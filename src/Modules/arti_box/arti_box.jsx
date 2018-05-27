import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import style from './arti_box.less'

import FOLDER from '@img/folder.png'
import LABEL from '@img/label.png'
import COMMENT from '@img/comment.png'
import TIME from '@img/time.png'


export default class ArtiBox extends Component {
  render() {
    return (
      <div>
        <section className={style.artiBox}>
          <section className="arti-box-top">
            <p className="article-title">
              <a href="#">标题</a>
            </p>
            <p className="article-info">
                <span className="time">
                  <img src={TIME} alt="發佈時間"/>
                  <i>发表于2018-03-29</i>
                </span>
              <span className="author">
                  <i>By</i>&nbsp;<a href="#">FechBlue</a>
                </span>
            </p>
          </section>
          <section className="arti-box-bottom">
            <div className="intro-box">
              <p className="intro">层叠样式表(英文全称：Cascading Style
                Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。</p>
              <p className="read-more">
                <Link to="/article">Read More</Link>
              </p>
            </div>
            <Row className="label-box">
              <Col span={24}>
                <Col xs={5} xl={4}>
                  <div className="label-left">
                    <img src={FOLDER}/>
                    <a href="#">面试</a>
                  </div>
                </Col>
                <Col xs={5} xl={4}>
                  <div className="label-left label-tech">
                    <img src={LABEL}/>
                    <a href="#">java</a>
                  </div>
                </Col>
                <Col xs={14} xl={16}>
                  <div className="label-right">
                    <img src={COMMENT}/>
                    <a href="#">comments</a>
                  </div>
                </Col>
              </Col>
            </Row>
          </section>
        </section>
      </div>
    )
  }
}