declare abstract class Topic {
    el: HTMLElement;
    title: string;
    no: number;
    constructor({ el, title, no }: {
        el: HTMLElement;
        title: string;
        no: number;
    });
    abstract create(): void;
    abstract mouted(): void;
}
declare class RadioTopic extends Topic {
    create(): void;
    mouted(): void;
}
declare class CheckboxTopic extends Topic {
    create(): void;
    mouted(): void;
}
