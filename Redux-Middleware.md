#### Redux 中间件
- 中间件允许我们扩展 redux 应用程序
- 中间件本质上就是一个函数:


#### Redux 加入了 中间件后的工作流程
-  组件触发 `action` 后, `store` 先将 `action` 交给 `中间件` 处理,然后再将 `action` 传递给 `reducer` 函数
  
<img src="./demos/redux-middleware-flow.png">

- 模板代码
```js
export default store => next => action => { }
```


#### Redux-thunk
- 允许在中间件 `middleware` 程序中加入异步代码
- `npm install redux-thunk`
- `import thunk from 'redux-thunk'`
- `export const store = createStore(rootReducer, applyMiddleware(thunk))`
```js
// 中间件-异步
const loadPosts = () => async dispatch => {
    // 异步代码
    const posts = await axios.get('/api/post').then(res => res.data)
    // 使用 dispatch 执行 action, 
    // 保存异步执行的结果
    dispatch({type: 'POST_LOADED', payload: posts})
}
```