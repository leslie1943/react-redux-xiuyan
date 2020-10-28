import { name, getName, RequestData } from 'delcare-export'

console.info(
  '>>>>>>>>>>>>>>>>>>>>>>>>> 🚀🚀 declare-export start 🚀🚀 <<<<<<<<<<<<<<<<<<<<<<<<<<<<< '
)

// 使用定义的常量
const xname: typeof name = 'Hippo'
console.info(xname)

// 使用定义的方法
const getNameImp: typeof getName = (val: string) => {
  return val
}
console.info(getNameImp('implement getName'))

// 使用接口
const requestData: RequestData = {
  id: 11,
  name: 'les',
  data: {},
}
console.info(requestData)

// console.info(name)
// const myName = getName('1')
// let cat = new Animal('cat')
// let directions = [Direction.Down, Direction.Left, Direction.Right, Direction.Up]
// let options: RequestData = {
//   id: 1,
//   name: 'cat',
//   data: {
//     status: 200,
//   },
// }

console.info(
  '>>>>>>>>>>>>>>>>>>>>>>>>> 🚀🚀 declare-export finish 🚀🚀 <<<<<<<<<<<<<<<<<<<<<<<<<<<<< '
)
export {}
