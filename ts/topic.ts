/*
 * @Author: Cphayim
 * @Date: 2020-06-24 22:57:21
 * @LastEditTime: 2020-06-24 23:04:35
 * @Description:
 */

abstract class Topic {
  el: HTMLElement
  title: string
  no: number

  constructor({ el, title = '', no = 1 }: { el: HTMLElement; title: string; no: number }) {
    this.el = el
    this.title = title
    this.no = no
  }

  abstract create(): void

  abstract mouted(): void
}

// 单选
class RadioTopic extends Topic {
  create(): void {
    throw new Error('Method not implemented.')
  }
  mouted(): void {
    throw new Error('Method not implemented.')
  }
}

// 多选
class CheckboxTopic extends Topic {
  create(): void {
    throw new Error('Method not implemented.')
  }
  mouted(): void {
    throw new Error('Method not implemented.')
  }
}
