declare function renderLayuiForm(): void;
declare type Mode = 'edit' | 'preview';
interface TopicConfig {
    title: string;
}
declare abstract class Topic {
    protected readonly mode: Mode;
    protected readonly ref: Element;
    protected no: number;
    protected el: Element;
    protected id: string;
    constructor(mode: Mode, ref: Element, no: number);
    abstract inject(config: TopicConfig): this;
    abstract create(): this;
    abstract mouted(): this;
    protected abstract build(): void;
}
interface RadioTopicConfig extends TopicConfig {
    options: Array<string>;
}
declare class RadioTopic extends Topic {
    config: RadioTopicConfig;
    inject(config: RadioTopicConfig): this;
    create(): this;
    mouted(): this;
    protected build(): void;
    private buildPreview;
    private buildEdit;
    private bindEvent;
}
interface CheckBoxTopicOptions {
}
declare class CheckboxTopic extends Topic {
    inject(options: CheckBoxTopicOptions): this;
    create(): this;
    mouted(): this;
    protected build(): string;
}
interface SelectTopicOptions {
}
declare class SelectTopic extends Topic {
    inject(options: SelectTopicOptions): this;
    create(): this;
    mouted(): this;
    protected build(): string;
}
interface UploadTopicOptions {
}
declare class UploadTopic extends Topic {
    inject(options: UploadTopicOptions): this;
    create(): this;
    mouted(): this;
    protected build(): string;
}
interface FillTopicOptions {
}
declare class FillTopic extends Topic {
    inject(options: FillTopicOptions): this;
    create(): this;
    mouted(): this;
    protected build(): string;
}
