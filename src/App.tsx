import React, { Component } from 'react'
import './App.css'
// import './demo/declare-demo'
import { Skeleton, Switch, List, Avatar } from 'antd'
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'

interface ListItemState {
  href: string
  title: string
  avatar: string
  description: string
  content: string
}
// const listData: Array<ListItemState> = []
const listData: ListItemState[] = []
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}

type IconText = {
  icon: any
  text: string
}

function IconText(props: IconText) {
  return (
    <span>
      {React.createElement(props.icon, { style: { marginRight: 8 } })}
      {props.text}
    </span>
  )
}

interface AppState {
  loading: boolean
}
class App extends Component<any, AppState> {
  state = {
    loading: true,
  }
  onChange = (checked: boolean) => {
    this.setState({ loading: !checked })
  }
  render() {
    const { loading } = this.state
    return (
      <>
        <Switch checked={!loading} onChange={this.onChange} />

        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={
                !loading
                  ? [
                      <IconText
                        icon={StarOutlined}
                        text="156"
                        key="list-vertical-star-o"
                      />,
                      <IconText
                        icon={LikeOutlined}
                        text="156"
                        key="list-vertical-like-o"
                      />,
                      <IconText
                        icon={MessageOutlined}
                        text="2"
                        key="list-vertical-message"
                      />,
                    ]
                  : []
              }
              extra={
                !loading && (
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                )
              }
            >
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        ></List>
      </>
    )
  }
}

export default App
