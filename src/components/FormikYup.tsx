import React from 'react'
import { useFormik /** FormikErrors */ } from 'formik'
import { Button, Input, Row, Col } from 'antd'
import * as Yup from 'yup'

interface BasicProps {
  username: string
  password: string
}
export default function FormikBasic() {
  const formik = useFormik<BasicProps>({
    // 默认值, 表单需要绑定的属性名,通过 name 属性和 initialValues 属性对应
    initialValues: {
      username: '',
      password: '',
    },
    // 表单校验规则
    // validate: (values: BasicProps) => {
    //   const errors: FormikErrors<BasicProps> = {}
    //   if (!values.username) {
    //     errors.username = '请输入用户名'
    //   } else if (values.username.length > 15) {
    //     errors.username = '用户名的长度不能大于15'
    //   } else if (values.username.length < 6) {
    //     errors.username = '用户名的长度不能小于6'
    //   }

    //   if (!values.password) {
    //     errors.password = '请输入密码'
    //   } else if (values.password.length < 6) {
    //     errors.password = '密码的长度不能小于6'
    //   }
    //   return errors
    // },
    // 通过 Yup.object 创建验证规则
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, '用户名的长度不能大于15')
        .min(6, '用户名的长度不能小于6')
        .required('请输入用户名'),
      password: Yup.string()
        .min(6, '密码的长度不能小于6')
        .required('请输入密码'),
    }),
    //  formik.handleSubmit 的时候执行的函数
    onSubmit: (values: BasicProps) => {
      console.info('yup values', values)
    },
  })
  return (
    //
    <Row style={{ margin: 20 }}>
      <Col span={6} push={6}>
        <form>
          <Input
            {...formik.getFieldProps('username')}
            type="text"
            name="username"
          />
          <div>
            {/* touched: 表单上的这个元素被更改过,并且没有通过验证 */}
            {/* touched 和 onBlur 事件是成对出现的 */}
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <Input
            style={{ marginTop: 10 }}
            {...formik.getFieldProps('password')}
            type="password"
            name="password"
          />
          <div>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          {/* 
            handleSubmit 是 useFormik 返回的一个函数 
            formik.handleSubmit() 执行后会去调用 onSubmit 方法
          */}
          <Button
            style={{ marginTop: 10 }}
            type="primary"
            onClick={() => formik.handleSubmit()}
          >
            提交
          </Button>
        </form>
      </Col>
    </Row>
  )
}
