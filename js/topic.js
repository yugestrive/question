"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Topic = (function () {
    function Topic(mode, ref, no) {
        this.mode = mode;
        this.ref = ref;
        this.no = no;
        this.id = Math.random().toString().slice(2);
    }
    return Topic;
}());
var RadioTopic = (function (_super) {
    __extends(RadioTopic, _super);
    function RadioTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioTopic.prototype.inject = function (config) {
        this.config = config;
        return this;
    };
    RadioTopic.prototype.create = function () {
        this.config = {
            title: '标题',
            options: ['选项1', '选项2'],
        };
        return this;
    };
    RadioTopic.prototype.mouted = function () {
        this.el = document.createElement('div');
        this.el.classList.add('question');
        this.ref.appendChild(this.el);
        this.build();
        return this;
    };
    RadioTopic.prototype.build = function () {
        var _this = this;
        this.el.innerHTML = "\n      <div class=\"question_title\">" + this.no + ". " + this.config.title + "</div>\n      <div class=\"question_wrap flex\">\n        " + this.config.options.map(function (option) { return _this.buildOption(option); }).join('\n') + "\n      </div>\n      <div class=\"edit_question\">\n          <div class=\"editorWrap\">\n              <div id=\"editor\" class=\"toolbar\"></div>\n              <div id=\"text\" class=\"text\"></div>\n          </div>\n      </div>\n    ";
        layui.form.render();
    };
    RadioTopic.prototype.buildOption = function (option) {
        return "\n      <input\n        type=\"radio\"\n        name=\"" + this.id + "\"\n        value=\"" + option + "\"\n        title=\"" + option + "\" lay-skin=\"primary\"\n        " + (this.mode === 'edit' ? 'disabled' : '') + "\n      >\n    ";
    };
    return RadioTopic;
}(Topic));
var CheckboxTopic = (function (_super) {
    __extends(CheckboxTopic, _super);
    function CheckboxTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxTopic.prototype.inject = function (options) {
        throw new Error('Method not implemented.');
    };
    CheckboxTopic.prototype.create = function () {
        throw new Error('Method not implemented.');
    };
    CheckboxTopic.prototype.mouted = function () {
        throw new Error('Method not implemented.');
    };
    CheckboxTopic.prototype.build = function () {
        throw new Error('Method not implemented.');
    };
    return CheckboxTopic;
}(Topic));
var SelectTopic = (function (_super) {
    __extends(SelectTopic, _super);
    function SelectTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectTopic.prototype.inject = function (options) {
        throw new Error('Method not implemented.');
    };
    SelectTopic.prototype.create = function () {
        throw new Error('Method not implemented.');
    };
    SelectTopic.prototype.mouted = function () {
        throw new Error('Method not implemented.');
    };
    SelectTopic.prototype.build = function () {
        throw new Error('Method not implemented.');
    };
    return SelectTopic;
}(Topic));
var UploadTopic = (function (_super) {
    __extends(UploadTopic, _super);
    function UploadTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UploadTopic.prototype.inject = function (options) {
        throw new Error('Method not implemented.');
    };
    UploadTopic.prototype.create = function () {
        throw new Error('Method not implemented.');
    };
    UploadTopic.prototype.mouted = function () {
        throw new Error('Method not implemented.');
    };
    UploadTopic.prototype.build = function () {
        throw new Error('Method not implemented.');
    };
    return UploadTopic;
}(Topic));
var FillTopic = (function (_super) {
    __extends(FillTopic, _super);
    function FillTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FillTopic.prototype.inject = function (options) {
        throw new Error('Method not implemented.');
    };
    FillTopic.prototype.create = function () {
        throw new Error('Method not implemented.');
    };
    FillTopic.prototype.mouted = function () {
        throw new Error('Method not implemented.');
    };
    FillTopic.prototype.build = function () {
        throw new Error('Method not implemented.');
    };
    return FillTopic;
}(Topic));
