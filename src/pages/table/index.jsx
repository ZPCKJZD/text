import React, { Component } from 'react'
import axios from 'axios'
import {Table,Card,Modal,Button,message} from 'antd'
export default class Tables extends Component {
    state={
            dataSource:[]
    }
    componentDidMount(){
        this.getTable()
    }
    getTable=()=>{
        axios.get('http://mock.studyinghome.com/mock/5e9ee1ef301a4f07a0c8aa87/zpc/table')
        .then(res=>{
            res.data.results.map((item,index)=>{
                    item.key=item.id
            })
                    this.setState({dataSource:res.data.results})
        })
    }
    handleChange=(recode,index)=>{
        let selectKey=[index];
        Modal.info({
            title:'用户信心',
            content:recode.name
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:recode
        })
    
    }
    handleDelete=()=>{
        let {selectedRows}=this.state;
        let ids=[]
        selectedRows.map(item=>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除',
            content:`你确定要删除这些${ids.join(',')}数据吗`,
            onOk:()=>{
                message.info('删除成功')
            }
        })
    }
    handleSort=(a,b,sort)=>{
       this.setState({sortOrder:sort.order})
    }

    render() {
        const columns=[
            {
                title:"id",
                dataIndex:'id'  
            },
            {
                title:"姓名",
                dataIndex:'name'  
            },
            {
                title:"年龄",
                dataIndex:'age'  
            },
            {
                title:"性别",
                dataIndex:'sex',
                render(sex){
                    return sex==1?"男":"女"
                } 
            },
            {
                title:"爱好",
                dataIndex:'interest',
                render(interest){
                    switch(interest){
                         case 1:
                             return "吃饭"
                         case 2:
                             return "喝水"
                         case 3:
                          return "睡觉"
                        default:
                            return "玩"
                            
                    }
                }
            },
            {
                title:'电话',
                dataIndex:'phone'
            }
        ]
        const {selectedRowKeys}=this.state;
        const rowSelection={
            type:"radio",
        }
        const rowCheckSelection={
            type:"check",
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="表格" >
                   <Table columns={columns} rowSelection={rowSelection}
                    onRow={(record,index) => {
                        return {
                          onClick: event => {this.handleChange(record,index)}, // 点击行
                        };
                      }}
                      scroll={{y:200}}
                      pagination={
                        {  defaultCurrent:1 ,pageSize:5,showQuickJumper:true}
                      }
                   bordered dataSource={this.state.dataSource}>

                   </Table>
                </Card>
                <Card title="复选框-表格" >
                    <Button onClick={this.handleDelete}>删除</Button>
                   <Table columns={columns} rowSelection={rowCheckSelection}
                   bordered dataSource={this.state.dataSource}  
                   onChange={this.handleSort}
                   >
                    
                   </Table>
                </Card>
            </div>
        )
    }
}
