export const name: string

export function getName(name: string): string

export class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi(): string
}

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export interface RequestData {
  id: number
  name: string
  data: any
}
