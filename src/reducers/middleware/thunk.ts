/**
 * 如果执行的是一个同步操作, 就传递一个 action
 * 如果执行的是一个异步操作, 就传递一个 function
 */

export default (store: any) => (next: any) => (action: any) => {
  // 1: 当前这个中间件函数不关心想执行什么样的异步操作 只关心执行的是不是异步操作
  // 2: 如果执行的是异步操作, 在触发action的时候,给我传递一个函数, 如果执行的是同步操作,就传递一个 action对象
  // 3: 异步操作的代码要写在传递进来的函数中
  // 4: 当前这个中间件函数在调用传递进来的函数时, 要将dispatch方法传递过去

  // 异步操作
  if (typeof action === 'function') {
    return action(store.dispatch) // 通过dispatch触发一个其他的action来保存异步操作
  }
  //   同步操作
  next(action) // 把action传递给下一个中间件 / reducer
}
