import React, { Component } from 'react'
import {Row,Col} from 'antd'
import Nav from './components/nav'
import Header from './components/header'
import Footer from './components/footer'
import './admin.less'
export default class Admin extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={4} className="nav">
                      <Nav/>
                    </Col>

                    <Col span={20} className='main'>
                        <Row className="header">
                           <Header />
                        </Row>
                        <Row className="main-content">
                           {this.props.children}
                        </Row>
                        <Row  className="footer">
                            <Footer/>
                        </Row>

                    </Col>
                </Row>   
            </div>
        )
    }
}
