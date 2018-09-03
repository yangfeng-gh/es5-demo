/**
 * Created by yangfeng on 2017/9/11.
 */

import store from 'store2'

/**
 * 代理二级属性
 * @param {*} lsKey 存在localStorage的key
 * @param {*} pk  一级属性的key
 */
const SStorage = store.namespace('rucke').session

function createHanlder(lsKey, pk) {
  return {
    set: function (target, key, value, receiver) {
      let item = SStorage.get(lsKey)
      if (item && item[pk]) {
        item[pk][key] = value
        SStorage.set(lsKey, item)
      }
      return Reflect.set(target, key, value, receiver)
    }
  }
}

/**
 * 仅仅存需要存放的数据
 * @param {*} source
 * @param {*} keys
 */
function copy(source, keys = []) {
  if (!source) {
    return source
  }
  let d = Object.create(null)
  keys.forEach(k => { d[k] = source[k] })
  return d
}

/**
 * 代理state
 * @param {*} initState 初始化的值
 * @param {*} lsKey localStorage的key
 * @param {*} keys  需要存储的键
 */
const proxy = function (initState, lsKey, keys = []) {
  let ks = keys, obj = Object.assign({}, initState, SStorage.get(lsKey))

  // 代理二级属性
  keys.forEach(k => {
    obj[k] = new Proxy(obj[k], createHanlder(lsKey, k))
  })
  // 存入合并的值
  SStorage.set(lsKey, copy(obj, keys))
  return new Proxy(obj, {
    set: function (target, key, value, receiver) {
      ks.indexOf(key) >= 0 && SStorage.set(lsKey, copy(target, keys))
      return Reflect.set(target, key, value, receiver)
    }
  })
}

export default proxy
