import React, { Component } from 'react'
import {Button,Card,Input,Form,Radio,DatePicker,TimePicker,Switch,Select,InputNumber,message} from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import moment from 'moment'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const Option=Select.Option
class Reg extends Component {
    reg=()=>{
        let userInfo=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,_)=>{
            if(!err){
                message.info(`${userInfo.address}`)
            }
        })
    }
    render() {
    const {getFieldDecorator}=this.props.form
    const layout={
        labelCol:{span:3},
        wrapperCol:{span:5}
    }

        return (
            <div>
                <Card title='注册'>
                    <Form>
                        <FormItem label="姓名" {...layout}>
                          {
                              getFieldDecorator('userName')(
                                  <Input/>
                              )
                          }
                        </FormItem>
                        <FormItem label="密码" {...layout}>
                          {
                              getFieldDecorator('pwd')(
                                  <Input type="password"/>
                              )
                          }
                        </FormItem>
                        <FormItem label="性别" {...layout}>
                          {
                              getFieldDecorator('sex',{
                                  initialValue:"1"
                              })(
                                  <Radio.Group>
                                      <Radio value="1">男</Radio>
                                      <Radio value="2">女</Radio>
                                  </Radio.Group>
                              )
                          }
                        </FormItem>
                        <FormItem label="年龄" {...layout}>
                          {
                              getFieldDecorator('age',{
                                  initialValue:"18"
                              })(
                                  <InputNumber/>
                              )
                          }
                        </FormItem>
                        <FormItem label="是否已婚" {...layout}>
                          {
                              getFieldDecorator('marry',{
                                  initialValue:false,
                                  valuePropName:'checked'
                              })(
                                  <Switch/>
                              )
                          }
                        </FormItem>
                        <FormItem label="爱好" {...layout}>
                          {
                              getFieldDecorator('interest',{
                                    initialValue:['1',"2"]
                              })(
                                 <Select mode="multiple">
                                     <Option value="1">睡觉</Option>
                                     <Option value="2">吃饭</Option>
                                     <Option value="3">喝水</Option>
                                     <Option value="4">玩</Option>
                                 </Select>
                              )
                          }
                        </FormItem>
                        <FormItem label="生日" {...layout} >
                          {
                              getFieldDecorator('birthday',{
                                  initialValue:moment("1998-03-04"),
                              })(
                               <DatePicker/>
                              )
                          }
                        </FormItem>
                        <FormItem label="时间" {...layout}>
                          {
                              getFieldDecorator('time',{
                                  placeholder:"请选择时间"
                              })(
                               <TimePicker placeholder="选择时间"/>
                              )
                          }
                        </FormItem>
                        <FormItem label="地址" {...layout}>
                          {
                              getFieldDecorator('address',{
                                 initialValue:"河北石家庄"
                              })(
                              <Input.TextArea autoSize={{minRows:4}}>
                              </Input.TextArea>
                              )
                          }
                        </FormItem>
                        <Button onClick={this.reg}>提交</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Reg=Form.create()(Reg)

