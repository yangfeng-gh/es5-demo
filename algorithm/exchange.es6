'use strict'
// 交换算法
/**
 * 借助算术运算
 */
{
  let a = 1, b = 2
  a = a + b
  b = a - b
  a = a - b
  console.log(`借助算术运算: a = ${a}, b = ${b}`)
}

/**
 * 借助异或运算
 */
{
  let a = 1, b = 2
  a ^= b
  b ^= a
  a ^= b
  console.log(`借助异或运算: a = ${a}, b = ${b}`)
}

/**
 * 借助异或运算
 */
{
  let a = 1, b = 2
  a = (b ^= a ^= b) ^ a
  console.log(`借助异或运算2: a = ${a}, b = ${b}`)
}

/**
 * 借助对象
 */
{
  let a = 1, b = 2
  a = {a: b, b: a}
  b = a.b
  a = a.a
  console.log(`借助对象: a = ${a}, b = ${b}`)
}

/**
 * 借助数组
 */
{
  let a = 1, b = 2
  a = [a, b]
  b = a[0]
  a = a[1]
  console.log(`借助数组: a = ${a}, b = ${b}`)
}

/**
 * 借助数组2
 */
{
  let a = 1, b = 2
  a = [b, b = a][0]
  console.log(`借助数组2: a = ${a}, b = ${b}`)
}

/**
 * 借助解构赋值
 */
{
  let a = 1, b = 2;
  [a, b] = [b, a]
  console.log(`借助解构赋值: a = ${a}, b = ${b}`)
}
