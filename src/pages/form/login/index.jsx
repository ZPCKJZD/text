import React, { Component } from 'react'
import {Button,Card,Form,Input,Checkbox,Icon, message} from 'antd'
const FormItem=Form.Item
class Login extends Component {
    login=()=>{
        let userInfo=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,value)=>{
            if(!err){
                message.info(`${userInfo.remember}`)
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
                <Card title="登录">
                    <Form>
                        <FormItem label="用户名" {...layout}>
                              {
                                  getFieldDecorator('userName',{
                                      rules:[
                                          {
                                              required:true,
                                              message:'用户名不能为空'
                                          },
                                          {
                                              min:3,
                                              max:6,
                                              message:'长度不够'
                                          }
                                      ]
                                  })(
                                      <Input prefix={<Icon type="user"/>}></Input>
                                  )
                              }
                        </FormItem>
                        <FormItem label="密码" {...layout}>
                              {
                                  getFieldDecorator('pwd')(
                                      <Input type="password" prefix={<Icon type="lock"/>}></Input>
                                  )
                              }
                        </FormItem>
                        <FormItem  {...layout}>
                              {
                                  getFieldDecorator('remember',{
                                      initialValue:true,
                                      valuePropName:'checked'
                                  })(
                                      <Checkbox style={{marginLeft:100}}>下次记住</Checkbox>
                                  )
                              }
                        </FormItem>
                        <Button onClick={this.login}>登录</Button>
                    </Form>
                </Card>      
            </div>
        )
    }
}
export default Login=Form.create({})(Login)