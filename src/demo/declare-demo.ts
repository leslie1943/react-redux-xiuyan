// >>>>>>>>>> 💛 declare module >>>>>>>>>> 💛
type BiddingType = typeof Bidding

const biddingItem: BiddingType = {
  name: 'leslie',
  price: 100,
  initBidding(msg) {
    console.info('msg', msg)
    return msg
  },
}
biddingItem.initBidding('start bidding')

// >>>>>>>>>> 💛 declare namespace >>>>>>>>>> 💛
const configType: typeof LibConfig = {
  submit: () => {},
  version: 'v1.2.3',
}
console.info(configType.version)

// >>>>>>>>>> 💛 declare interface >>>>>>>>>> 💛
const baseData: DataItem = {
  name: 'leslie',
}
console.info('baseData', baseData)

const baseRes: ResultItem = {
  age: 19,
}
console.info('baseRes', baseRes)

const baseConfig: Base = {
  id: 199,
  time: 2200,
  errCode: 200,
  res: {
    name: 'leslie',
    age: 18,
  },
}
console.info('baseConfig', baseConfig)

// >>>>>>>>>> 💛 declare type >>>>>>>>>> 💛
const resultConfig: ResultType = {
  name: 'leslie',
  age: 22,
  gender: false,
  extra: {
    loginTime: 222,
  },
}
console.info('resultConfig', resultConfig)

// >>>>>>>>>> 💛 declare function >>>>>>>>>> 💛
const getAccountImp: typeof getAccount = (id: number): string => {
  return 'hhh'
}
getAccountImp(200)

export {}
