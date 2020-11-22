// export default function (store: any) {
//   return function (next: any) {
//     return function (action: any) {}
//   }
// }

// ES6 template
export default (store: any) => (next: any) => (action: any) => {
  console.info('test middleware has been performed!')
  next(action) // 传递给 reducer
}
