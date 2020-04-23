import React, { Component } from 'react'
import {Button,Card,Form,Input,Select,Radio,Checkbox,message, InputNumber,Switch,DatePicker,TimePicker} from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import moment from 'moment'
const RadioGroup=Radio.Group
const Option=Select.Option
const TextArea=Input.TextArea
class Reg extends Component {
    reg=()=>{
        let userInfo=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,value)=>{
            if(!err){
                message.info(`${userInfo.address}`)
            }
        })
    }
    render() {
        const {getFieldDecorator}=this.props.form
        const layout={
            labelCol:{span:3},
            wrapperCol:{span:6}
        }
        return (
            <div>
               <Card title="注册">
                   <Form>
                       <FormItem label="姓名" required {...layout}>
                            {getFieldDecorator('userName',{
                                initialValue:'郑鹏程',
                                rules:[
                                    {
                                        required:true,
                                        message:'用户名不能为空',

                                    },
                                    {
                                        pattern:/^\w+$/g,
                                        message:'必须是字母和数字'
                                    }
                                ]
                            })(
                                <Input></Input>
                            )}
                       </FormItem>
                       <FormItem label="密码" required {...layout}>
                            {getFieldDecorator('pwd',{
                                initialValue:'123456',
                                rules:[
                                    {
                                        required:true,
                                        message:'密码名不能为空',

                                    },
                                    {
                                        pattern:/^\w+$/g,
                                        message:'必须是字母和数字'
                                    }
                                ]
                            })(
                                <Input></Input>
                            )}
                       </FormItem>
                       <FormItem label="性别"  {...layout}>
                            {getFieldDecorator('sex',{
                                  initialValue:"1"
                            })(
                                <RadioGroup>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </RadioGroup>
                            )}
                       </FormItem>
                       <FormItem label="年龄"  {...layout}>
                            {getFieldDecorator('age',{
                                  initialValue:"18"
                            })(
                               <InputNumber/>
                            )}
                       </FormItem>
                       <FormItem label="爱好"  {...layout}>
                            {getFieldDecorator('interest',{
                                  initialValue:["1"]
                            })(
                             <Select mode="multiple">
                                 <Option value="1">睡觉</Option>
                                 <Option value="2">吃饭</Option>
                                 <Option value="3">喝水</Option>
                                 <Option value="4">玩</Option>
                             </Select>
                            )}
                       </FormItem>
                       <FormItem label="是否已婚"  {...layout}>
                            {getFieldDecorator('marry',{
                                  initialValue:true,
                                  valuePropName:'checked'
                            })(
                               <Switch></Switch>
                            )}
                       </FormItem>
                       <FormItem label="生日"  {...layout}>
                            {getFieldDecorator('birthday',{
                                  initialValue:moment("2020-04-23")
                            })(
                               <DatePicker></DatePicker>
                            )}
                       </FormItem>
                       <FormItem label="时间"  {...layout}>
                            {getFieldDecorator('time',{
                                  initialValue:moment("13-34-12")
                            })(
                             <TimePicker></TimePicker>
                            )}
                       </FormItem>
                       <FormItem label="地址"  {...layout}>
                            {getFieldDecorator('address',{
                                  initialValue:"石家庄"
                            })(
                            <TextArea autoSize={{minRows:4}}></TextArea>
                            )}
                       </FormItem>

                   </Form>
                   <Button onClick={this.reg}>提交</Button>
               </Card>
            </div>
        )
    }
}
export default  Reg=Form.create()(Reg)
