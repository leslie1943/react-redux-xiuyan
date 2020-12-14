import React from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
// import { Button, Input, Row, Col } from 'antd'
import * as Yup from 'yup'

interface BasicProps {
  username: string
  content: string
  subject: string
}
interface FieldProps {
  id: string
  name: string
  type: string
  placeholder: string
  label: string
}

function MyInput({ label, ...props }: FieldProps) {
  const [field, meta] = useField(props)
  /**
   *  name: "password"
      onBlur: ƒ ()
      onChange: ƒ ()
      value: ""
   */
  // console.info('field', field)

  /** 存储验证信息
   *  error: "密码的长度不能小于6"
      initialError: undefined
      initialTouched: false
      initialValue: ""
      touched: false
      value: "222"
   */
  // console.info('meta', meta)

  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </div>
  )
}

interface CheckboxProps {
  // id: string
  name: string
  label: string
  value: string
}
function Checkbox({ label, ...props }: CheckboxProps) {
  const [, meta, helper] = useField(props)
  console.info('meta', meta)
  // value 属性代表的 hobbies 的值
  const { value } = meta

  // 通过 setValue 更改 value 的值
  const { setValue } = helper
  const handleChange = () => {
    const set = new Set<string>(value)
    if (set.has(props.value)) {
      set.delete(props.value)
    } else {
      set.add(props.value)
    }
    setValue([...set])
  }
  return (
    <div>
      <label>
        <input
          checked={value.includes(props.value)}
          {...props}
          type="checkbox"
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  )
}

export default function FormikForm() {
  const initialValues = {
    username: '',
    content: 'xxx',
    subject: '',
    password: '',
    hobbies: ['篮球'],
  }
  const handleSubmit = (values: BasicProps) => {
    console.info('formik form values:', values)
  }
  const schema = Yup.object({
    username: Yup.string()
      .max(15, '用户名的长度不能大于15')
      .min(6, '用户名的长度不能小于6')
      .required('请输入用户名'),
    password: Yup.string().min(6, '密码的长度不能小于6').required('请输入密码'),
  })
  return (
    // Formik: 默认值, 提交事件, 验证规则
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Field name="username"></Field>
        <ErrorMessage name="username" />
        <MyInput
          id="myPass"
          name="password"
          type="password"
          placeholder="请输入密码"
          label="password"
        />
        <Checkbox value="足球" label="足球" name="hobbies" />
        <Checkbox value="篮球" label="篮球" name="hobbies" />
        <Checkbox value="橄榄球" label="橄榄球" name="hobbies" />
        <Field name="content" as="textarea"></Field>
        <Field name="subject" as="select">
          <option value="front">前端</option>
          <option value="Java">Java</option>
        </Field>
        <input type="submit" />
      </Form>
    </Formik>
  )
}
