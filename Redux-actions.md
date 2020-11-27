#### Redux-actions
```js
import { creaetAction } from 'redux-actions'

/*
increment 这个字符串就是 action里对应的 type 属性值
createAction 的返回值 就是 我们之前定义的 action creator 函数
*/
const increment_action = createAction('increment') 
const decrement_action = createAction('decrement')
```


#### 创建 reducer
```js
import { handleActions as createReducer } from 'redux-actions'
import { increment_action, decrement_action } from '../actions/counter.action'

const initialState = { count: 0 }
const counterReducer = createReducer({
  [increment_action]: (state, action) => ({ count: state.count + 1}),
  [decrement_action]: (state, action) => ({ count: state.count - 1}),
}, initialState)

export default counterReducer
```