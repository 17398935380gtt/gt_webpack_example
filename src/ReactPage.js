'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import "./ReactPage.less";
import TestImg from "./img/WechatIMG1319.jpeg";
import ES6Test from "./ES6Demo/test_promise";

import {Button} from "antd";

class ReactPage extends React.Component{
     render() {
         return <div id="ReactText">react text 测试watch 热更新测试
            <img src={TestImg} style={{width:"auto",height:"auto"}} alt=""/>
             <Button>click</Button>
         </div>
     }
 }

ReactDom.render(
    <ReactPage/>,document.getElementById('root')
);

 //npm run build 打包之后，在dist文件夹里通过html文件调用（要添加root节点）
