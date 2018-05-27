import React, {Component} from 'react'
import {Row, Col} from 'antd'
import style from './aside.less'

import DOUBAN1 from '@img/douban1.webp'
import DOUBAN2 from '@img/douban2.webp'

export default class Aside extends Component {
  render() {
    return (
      <div>
        <Col xl={6} xs={24} style={{paddingRight: '2%'}}>
          <Row className={style.leftBox}>
            <Col span={24}>
              <section className="sort-box aside-box">
                <p className="aside-title">分类</p>
                <ul>
                  <li>
                    <a href="#">分类
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">分类
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">分类
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">分类
                      <sup>1</sup>
                    </a>
                  </li>
                </ul>
              </section>
              <section className="aside-label aside-box">
                <p className="aside-title">标签</p>
                <ul>
                  <li>
                    <a href="#">标签
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签&nbsp;&nbsp;&nbsp;&nbsp;
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签&nbsp;&nbsp;&nbsp;&nbsp;
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签&nbsp;&nbsp;&nbsp;&nbsp;
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签标签&nbsp;&nbsp;&nbsp;&nbsp;
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签标签v标签
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签标签标签标签
                      <sup>1</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">标签标签
                      <sup>1</sup>
                    </a>
                  </li>
                </ul>
              </section>
              <section className="friendly-link aside-box">
                <p className="aside-title">友情链接</p>
              </section>
              <section className="douban-show aside-box">
                <p className="aside-title">豆瓣秀</p>
                <div className="douban-box">
                  <a href="#">
                    <img src={DOUBAN1}/>
                  </a>
                  <a href="#">
                    <img src={DOUBAN2}/>
                  </a>
                </div>
              </section>
            </Col>
          </Row>
        </Col>
      </div>
    )
  }
}