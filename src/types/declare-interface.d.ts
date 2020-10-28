declare interface DataItem {
  name: string
}

declare interface ResultItem {
  age: number
}

declare interface Base {
  id: number
  time: number
  errCode: number
  res: DataItem | ResultItem
}
