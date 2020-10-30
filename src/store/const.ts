/**
 * 添加需要响应的消息类型
 */

// 定义增加 state 常量类型
/**
 * 这里经过const声明的字符串, 有更具体的类型, 不是string。而是const INCREMENT: 'INCREMENT'
 */
export const INCREMENT = 'INCREMENT'
export type INCREMENT_TYPE = typeof INCREMENT // 首先typeof后面是值, 得到类型
// ===> type INCREMENT_TYPE = "INCREMENT"

// 定义减少 state 常量类型
export const DECREMENT = 'DECREMENT'
export type DECREMENT_TYPE = typeof DECREMENT

export interface IncrementAction {
  type: INCREMENT_TYPE
}
