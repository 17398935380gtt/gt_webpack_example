'use strict';

import React from 'react';
import "./test_promise.less";
import TestImg from "../img/WechatIMG1319.jpeg";
/*promise*/

 class Test_promise extends React.Component{
    constructor() {
        super();
        this.state={

        }
    }

    render (){
        return(
            <div>
                <h1>promise</h1>
                <h2>promise产生的背景：</h2>
                <text>在JavaScript中所有的代码都是单线程执行的，单线程是指javascript代码从上到下执行，一个函数执行完成以后才能执行下一个函数。</text><br/>
                <text>这样的执行机制容易造成线程阻塞问题，JavaScript中还存在异步操作，promise就是ES6为了解决异步操作推出的新方法。</text>
                <h2>promise的使用方法</h2>
                <h2>ES5是怎么实现异步操作的</h2>
            </div>
        )
    }
}

export default  Test_promise
