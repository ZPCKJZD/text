import React, { Component } from 'react'
import {Card} from 'antd'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import echartsTheme from './../echartTheme'
import ReactEcharts from 'echarts-for-react'
export default class Bar extends Component {
    componentWillMount(){
        echarts.registerTheme("my",echartsTheme)
    }
    getOption=()=>{
        let option={
            title:{
                text:'用户数据源'
            },
            tooltip:{
                trigger:'item'

            },
            xAxis:{
                data:['周一',"周二","周三"]
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'订单量',
                    type:'bar',
                    data:[1000,1002,2000]
                }

            ]


        }
         
        
        return option
    }
    getOption2=()=>{
        let option={
            title:{
                text:'自行车用户比'
            },
            tooltip:{
                trigger:'item'
            },
            xAxis:{
                data:['周一',"周二","周三","周四"]
            },
            legend:{
                   data:['ofo',"co"]
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'ofo',
                    type:'line',
                    data:[1000,1002,2000,3000]
                },
                {
                    name:'co',
                    type:'bar',
                    data:[1000,1002,2000,3999]
                }


            ]


        }
         
        
        return option
    }
    render() {
        return (
            <div>
                <Card title="柱形图">
                <ReactEcharts option={this.getOption()}  theme="my"></ReactEcharts>
                </Card>
                <Card title="柱形图-2">
                <ReactEcharts option={this.getOption2()}  theme="my"></ReactEcharts>
                </Card>
        
            </div>
        )
    }
}
