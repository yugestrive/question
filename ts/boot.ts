/*
 * @Author: Cphayim
 * @Date: 2020-06-24 23:49:37
 * @LastEditTime: 2020-06-25 00:40:05
 * @Description:
 */

// 左侧操作栏
class LeftActions {
  private readonly topicMap = new Map(
    Object.entries({
      radio: RadioTopic,
      checkbox: CheckboxTopic,
    })
  )

  private topicNo = 1

  constructor(
    // 左侧操作栏的外围元素，用于挂载事件
    private readonly actionRef: Element,
    // 操作按钮的样式类名
    private readonly classFlag: string,
    // 表单容器外围锚点
    private readonly formRef: Element
  ) {
    this.bindEvent()
  }

  bindEvent(): void {
    this.actionRef.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (!target.classList.contains(this.classFlag)) return
      const topicType = target.dataset.type
      this.handleAddTopic(topicType)
    })
  }

  handleAddTopic(type: string) {
    const Topic = this.topicMap.get(type)
    if (!Topic) {
      console.warn(`没有找到 type 为 ${type} 的 Topic 类型`)
      return
    }
    const topic = new Topic('edit', this.formRef, this.topicNo++)
    topic.create().mouted()
  }
}

;((window: Window) => {
  const formRef: Element = document.querySelector('#form')
  const leftActionsRef: Element = document.querySelector('.left_check')

  const leftActions = new LeftActions(leftActionsRef, 'add', formRef)
})(window)
