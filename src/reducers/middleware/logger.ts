// export default function (store: any) {
//   return function (next: any) {
//     return function (action: any) {}
//   }
// }

// ES6 template
export default (store: any) => (next: any) => (action: any) => {
  console.info('store', store) // dispatch:fn(){}, getState:fn(){}
  console.info('action', action) // {type:xxxx, payload:yyyy}
  next(action) // 传递给 reducer
}
