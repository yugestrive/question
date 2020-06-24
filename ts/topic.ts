/*
 * @Author: Cphayim
 * @Date: 2020-06-24 22:57:21
 * @LastEditTime: 2020-06-25 03:06:19
 * @Description:
 */

function renderLayuiForm() {
  layui.form.render()
}

type Mode = 'edit' | 'preview'

interface TopicConfig {
  // 问题标题
  title: string
}

abstract class Topic {
  // 题目外框 dom 元素
  protected el: Element

  protected id: string = Math.random().toString().slice(2)

  constructor(
    // 模式：编辑或预览
    protected readonly mode: Mode,
    // 挂载目标 dom
    protected readonly ref: Element,
    // 题号
    protected no: number
  ) {}

  // 用于预览模式注入 options 对象
  public abstract inject(config: TopicConfig): this

  // 用于编辑模式创建 options 对象
  public abstract create(): this

  // 用于创建 dom 元素并挂载
  public abstract mouted(): this

  protected abstract build(): void
}

interface RadioTopicConfig extends TopicConfig {
  options: Array<string>
}

// 单选
class RadioTopic extends Topic {
  config: RadioTopicConfig

  inject(config: RadioTopicConfig): this {
    this.config = config
    return this
  }
  create(): this {
    this.config = {
      title: '标题',
      options: ['选项1', '选项2'],
    }
    return this
  }
  mouted(): this {
    this.el = document.createElement('div')
    this.el.classList.add('question')
    this.ref.appendChild(this.el)

    this.build()
    return this
  }

  // 构建组件
  protected build(): void {
    this.el.innerHTML = `
      ${this.buildPreview()}
      ${this.mode === 'edit' ? this.buildEdit() : ''}
    `
    this.bindEvent()
    renderLayuiForm()
  }

  // 构建预览区
  private buildPreview(): string {
    const _buildOption = (option: string) => `
      <input
        type="radio"
        name="radio_option_${this.id}"
        value="${option}"
        title="${option}" lay-skin="primary"
        ${this.mode === 'edit' ? 'disabled' : ''}
      >
    `
    return `
      <div class="preview_question">
        <div class="question_title">${this.no}. ${this.config.title}</div>
        <div class="question_wrap flex">
          ${this.config.options.map((option) => _buildOption(option)).join('\n')}
        </div>
      </div>
    `
  }

  // 构建编辑区
  private buildEdit(): string {
    const _buildOption = (option: string, index: number) => `
      <tr>
          <td>
            <input
              data-role="option"
              data-index="${index}"
              value="${option}"
              class="input"
              type="text"
              placeholder="选项"
            />
            <i data-role="remove" data-index="${index}" class="layui-icon">&#xe616;</i>
          </td>
          <td class="default">
            <input
              data-role="default"
              data-index="${index}"
              type="radio"
              name="radio_default_${this.id}"
              title="若选中，用户在填问卷时此选项会默认被选中"
              lay-ignore
            />
          </td>
          <td class="move default">
            <span data-role="up" data-index="${index}">上移</span>
            <span data-role="down" data-index="${index}">下移</span>
          </td>
      </tr>
    `
    return `
      <div class="edit_question">
          <div class="editorWrap">
              <textarea
                data-role="title"
                class="layui-textarea"
                rows="3"
                placeholder="请输入标题"
              >${this.config.title}</textarea>
          </div>
          <div class="selScrrol">
              <table class="table_option" cellspacing="0" cellpadding="0" width="98%">
                  <tr class="table_head">
                      <td>
                          <span>选项文字</span>
                      </td>
                      <td class="default">默认</td>
                      <td class="default">上移下移</td>
                  </tr>
                  ${this.config.options.map((option, index) => _buildOption(option, index)).join('\n')}
              </table>
          </div>
          <div class="addbtn">
              <span class="btn">
                  <span class="icon">+</span>
                  <a data-role="add" class="aText" href="javascript:">添加选项</a>
              </span>
          </div>
          <div data-role="finish" class="finishBtn">完成编辑</div>
      </div>
    `
  }

  private bindEvent() {
    this.el.addEventListener('change', (e) => {
      const target = e.target as any
      const { role, index } = target.dataset
      if (role === 'option') {
        this.config.options[~~index] = target.value
      }else if(role === 'title') {
        this.config.title = target.value
      }
      this.build()
    })
  }
}

interface CheckBoxTopicOptions {}

// 多选
class CheckboxTopic extends Topic {
  inject(options: CheckBoxTopicOptions): this {
    throw new Error('Method not implemented.')
  }

  create(): this {
    throw new Error('Method not implemented.')
  }
  mouted(): this {
    throw new Error('Method not implemented.')
  }
  protected build(): string {
    throw new Error('Method not implemented.')
  }
}

interface SelectTopicOptions {}

// 下拉选择
class SelectTopic extends Topic {
  inject(options: SelectTopicOptions): this {
    throw new Error('Method not implemented.')
  }

  create(): this {
    throw new Error('Method not implemented.')
  }
  mouted(): this {
    throw new Error('Method not implemented.')
  }
  protected build(): string {
    throw new Error('Method not implemented.')
  }
}

interface UploadTopicOptions {}

// 上传
class UploadTopic extends Topic {
  inject(options: UploadTopicOptions): this {
    throw new Error('Method not implemented.')
  }

  create(): this {
    throw new Error('Method not implemented.')
  }
  mouted(): this {
    throw new Error('Method not implemented.')
  }
  protected build(): string {
    throw new Error('Method not implemented.')
  }
}

interface FillTopicOptions {}

// 填空
class FillTopic extends Topic {
  inject(options: FillTopicOptions): this {
    throw new Error('Method not implemented.')
  }

  create(): this {
    throw new Error('Method not implemented.')
  }
  mouted(): this {
    throw new Error('Method not implemented.')
  }
  protected build(): string {
    throw new Error('Method not implemented.')
  }
}
