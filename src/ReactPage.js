'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import "./ReactPage.less";
import TestImg from "./img/WechatIMG1319.jpeg";

import {Button} from "antd";

class ReactPage extends React.Component{
     render() {
         return <div id="ReactText">react text 测试watch 热更新测试
            <img src={TestImg} style={{width:"auto",height:"auto"}} alt=""/>
             <Button>引入antd</Button>
         </div>
     }
 }

ReactDom.render(
    <ReactPage/>,document.getElementById('root')
);

//webpack-dev-server --open 直接运行

//npm run build 打包之后，在dist文件夹里通过html文件调用（要添加root节点）
