import React, { Component } from 'react'
import {Card,Input,Checkbox,Icon,Form,Button,message} from 'antd'
const FormItem=Form.Item;
 class Login extends Component {
    login=()=>{
      let userInfo=this.props.form.getFieldsValue();
      this.props.form.validateFields((err,value)=>{
          if(!err){
              message.info(`${userInfo.userName}`)
          }
      })


    }

    render() {
        const layout={
            labelCol:{xs:24,md:4},
            wrapperCol:{xs:24,md:8}
        }
        let {getFieldDecorator}=this.props.form
        return (
            <div>
            <Card title="登录">
                 <Form>
                    <FormItem label="用户名" {...layout} required>
                         {
                             getFieldDecorator('userName',{
                                 rules:[
                                     {
                                         required:true,
                                         message:'用户名不能为空'
                                     },
                                     {
                                         min:5,
                                         max:10,
                                         message:'长度不适合'
                                     },
                                     {
                                         pattern:/^\w+$/,
                                         message:'必须是数字或者密码'
                                     }
                                 ]
                             })(
                                 <Input prefix={<Icon type="user"></Icon>}/>
                             )
                         }
                    </FormItem>
                    <FormItem label="密码" {...layout}>
                        {
                            getFieldDecorator('pwd',{
                                rules:[
                                    {
                                        required:true,
                                        message:"密码不能为空"
                                    },
                                    {
                                        min:6,
                                        max:12,
                                        message:"123"
                                    },{
                                        pattern:/^\w+$/g,
                                        message:'必须位数字或字母'
                                    }
                            
                                ]
                            })(
                               <Input prefix={<Icon type="lock"/>}></Input>
                            )
                        }

                    </FormItem>
                    <FormItem  {...layout}>
                        {
                            getFieldDecorator('remember',{
                                  initialValue:true,
                                  valuePropName:'checked'
                            })(
                                 <Checkbox style={{marginLeft:100}}>
                                     记住密码
                                 </Checkbox>
                            )
                        }
                    </FormItem>
                    <Button onClick={this.login} >登录</Button>
                 </Form>
            </Card>
            </div>
        )
    }
}
export default Login=Form.create()(Login)
