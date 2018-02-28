import React, { Component } from 'react'
import './header.css'
import flag from './assets/flag.png'
import brand from './assets/brand.png'
import { Input, Popover } from 'antd'

const Search = Input.Search
const pingmian = (
    <ul>
        <li>潘通®配色系统®</li>
        <li>金属色、粉彩色、霓虹色</li>
        <li>叠印色彩</li>
        <li>优惠套餐</li>
        <li>软件及色彩评估工具</li>
    </ul>
)
const fuzhuang = (
    <ul>
        <li>棉布产品</li>
        <li>纸板产品</li>
        <li>尼龙产品</li>
        <li>优惠套餐</li>
        <li>潮流趋势</li>
    </ul>
)
const suliao = (
    <ul>
        <li>塑料色片</li>
        <li>塑料标准色片</li>
        <li>其他色卡</li>
    </ul>
)
const youmo = (
    <ul>
        <li>普通专色</li>
        <li>金属色</li>
        <li>高级金属色</li>
        <li>荧光专色</li>
        <li>粉彩色</li>
    </ul>
)
const shouji = (
    <ul>
        <li>iPhoneX</li>
        <li>iPhone7/8</li>
        <li>iPhone6/6s</li>
    </ul>
)
class Header extends Component {
    render () {
        return (
            <div className='header center'>
                <div className='header_top'>
                    <div className='tag left'>
                        <div className='left'>
                            <img src={ flag } alt=""/>
                        </div>
                        <div className='left'>
                            <ul className="forLook left">
                                <li><span>简体中文</span></li>
                                <li><span>繁體中文</span></li>
                                <li><span>RMB（人民币）</span></li>
                                <li className='lastRow'><span>中国服务电话:400-885-2222</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='welcome right'>
                        <span>您好！欢迎来到潘通中国，开启您的色卡之旅</span>
                    </div>
                </div>
                <div className="header_middle">
                    <div className="branding">
                        <img src= {brand} alt=""/>
                    </div>
                    <div className="search">
                        <Search
                        placeholder="搜索"
                        onSearch={value => console.log('此方法尚未定义' + value)}
                        size="large"
                        enterButton 
                        />
                    </div>
                    <div className="header_nav">
                        <ul>
        <Popover placement="bottom" title={<strong>平面设计</strong>} content={pingmian} trigger="hover">
                                <li>平面设计</li>
                            </Popover>
                            <Popover placement="bottom" title={<strong>服装，家居 + 室内装潢</strong>} content={fuzhuang}trigger="hover">
                                <li>服装 + 家具</li>
                            </Popover>
                            <Popover placement="bottom" title={<strong>塑料</strong>} content={suliao} trigger="hover">
                                <li>塑料</li>
                            </Popover>
                            <Popover placement="bottom" title={<strong>油墨</strong>} content={youmo} trigger="hover">
                                <li>油墨</li>
                            </Popover>
                            <Popover placement="bottom" title={<strong>手机壳</strong>} content={shouji}trigger="hover">
                                <li>手机壳</li>
                            </Popover>
                            <li>色彩资讯</li>
                            <li>帮助</li>
                            <li>找寻PANTONE色彩</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header