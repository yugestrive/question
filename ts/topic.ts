/*
 * @Author: Cphayim
 * @Date: 2020-06-24 22:57:21
 * @LastEditTime: 2020-06-25 01:08:36
 * @Description:
 */

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

  protected build(): void {
    console.log(`
    <div class="question_title">${this.no}. ${this.config.title}</div>
    <div class="question_wrap flex">
      ${this.config.options.map((option) => this.buildOption(option)).join('\n')}
    </div>
    <div class="edit_question">
        <div class="editorWrap">
            <div id="editor" class="toolbar"></div>
            <div id="text" class="text"></div>
        </div>
    </div>
  `)
    this.el.innerHTML = `
      <div class="question_title">${this.no}. ${this.config.title}</div>
      <div class="question_wrap flex">
        ${this.config.options.map((option) => this.buildOption(option)).join('\n')}
      </div>
      <div class="edit_question">
          <div class="editorWrap">
              <div id="editor" class="toolbar"></div>
              <div id="text" class="text"></div>
          </div>
      </div>
    `
    layui.use(['form', 'upload'], function () {
      var $ = layui.jquery,
        upload = layui.upload,
        form = layui.form

      // form.render('select', 'select')

      // upload.render({
      //   elem: '#fileUp',
      //   url: 'https://httpbin.org/post', //改成您自己的上传接口
      //   accept: 'file', //普通文件
      //   // ,exts: 'zip|rar|7z' //只允许上传压缩文件
      //   size: 4096,
      //   done: function (res: any) {
      //     layer.msg('上传成功')
      //     console.log(res)
      //   },
      // })
    })
  }

  private buildOption(option: string): string {
    return `
      <input
        type="radio"
        name="${this.id}"
        value="${option}"
        title="${option}" lay-skin="primary"
        ${this.mode === 'edit' ? 'disabled' : ''}
      >
    `
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
