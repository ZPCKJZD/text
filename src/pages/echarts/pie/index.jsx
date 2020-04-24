import React, { Component } from 'react'
import {Card} from  'antd'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/pie'
import ReactEcharts from 'echarts-for-react'
import echartsTheme from './../echartTheme'
export default class Pie extends Component {
    componentWillMount(){
          echarts.registerTheme("my",echartsTheme)
    }
    getOption=()=>{
        let option={
            title:{
                text:"家庭每月消费占比",
                x:'center',
                textStyle:{
                    color:"#000"
                }
            },
            tooltip:{
                trigger:'item',
                formatter:'{a}<br/>{b}:{c}({d}%)'
            
            },
            legend:{
                  orient:'vertical',
                  top:10,
                  right:100,
                 data:["吃饭","旅游","出行","娱乐"]
            },
            series:[
                {
                    name:"家庭消费",
                    type:'pie',
                    radius:['60%',"80%"],
                    data:[
                        {
                            name:'吃饭',
                            value:1000
                        },
                        {
                            name:'旅游',
                            value:2000
                        },
                        {
                            name:'出行',
                            value:300
                        },
                        {
                            name:'娱乐',
                            value:3000
                        },

                    ]
                }
            ]

        }
        return option
    }
    render() {
        return (
            <div>
               <Card title="饼图">
                   <ReactEcharts option={this.getOption()}  theme="my"></ReactEcharts>
               </Card>
            </div>
        )
    }
}
