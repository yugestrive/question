declare class LeftActions {
    private readonly actionRef;
    private readonly classFlag;
    private readonly formRef;
    private readonly topicMap;
    private topicNo;
    constructor(actionRef: Element, classFlag: string, formRef: Element);
    bindEvent(): void;
    handleAddTopic(type: string): void;
}
