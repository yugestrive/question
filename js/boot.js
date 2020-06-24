"use strict";
var LeftActions = (function () {
    function LeftActions(actionRef, classFlag, formRef) {
        this.actionRef = actionRef;
        this.classFlag = classFlag;
        this.formRef = formRef;
        this.topicMap = new Map(Object.entries({
            radio: RadioTopic,
            checkbox: CheckboxTopic,
        }));
        this.topicNo = 1;
        this.bindEvent();
    }
    LeftActions.prototype.bindEvent = function () {
        var _this = this;
        this.actionRef.addEventListener('click', function (e) {
            var target = e.target;
            if (!target.classList.contains(_this.classFlag))
                return;
            var topicType = target.dataset.type;
            _this.handleAddTopic(topicType);
        });
    };
    LeftActions.prototype.handleAddTopic = function (type) {
        var Topic = this.topicMap.get(type);
        if (!Topic) {
            console.warn("\u6CA1\u6709\u627E\u5230 type \u4E3A " + type + " \u7684 Topic \u7C7B\u578B");
            return;
        }
        var topic = new Topic('edit', this.formRef, this.topicNo++);
        topic.create().mouted();
    };
    return LeftActions;
}());
;
(function (window) {
    var formRef = document.querySelector('#form');
    var leftActionsRef = document.querySelector('.left_check');
    var leftActions = new LeftActions(leftActionsRef, 'add', formRef);
})(window);
