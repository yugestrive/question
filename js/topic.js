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
function renderLayuiForm() {
    layui.form.render();
}
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
        this.el.innerHTML = "\n      " + this.buildPreview() + "\n      " + (this.mode === 'edit' ? this.buildEdit() : '') + "\n    ";
        this.bindEvent();
        renderLayuiForm();
    };
    RadioTopic.prototype.buildPreview = function () {
        var _this = this;
        var _buildOption = function (option) { return "\n      <input\n        type=\"radio\"\n        name=\"radio_option_" + _this.id + "\"\n        value=\"" + option + "\"\n        title=\"" + option + "\" lay-skin=\"primary\"\n        " + (_this.mode === 'edit' ? 'disabled' : '') + "\n      >\n    "; };
        return "\n      <div class=\"preview_question\">\n        <div class=\"question_title\">" + this.no + ". " + this.config.title + "</div>\n        <div class=\"question_wrap flex\">\n          " + this.config.options.map(function (option) { return _buildOption(option); }).join('\n') + "\n        </div>\n      </div>\n    ";
    };
    RadioTopic.prototype.buildEdit = function () {
        var _this = this;
        var _buildOption = function (option, index) { return "\n      <tr>\n          <td>\n            <input\n              data-role=\"option\"\n              data-index=\"" + index + "\"\n              value=\"" + option + "\"\n              class=\"input\"\n              type=\"text\"\n              placeholder=\"\u9009\u9879\"\n            />\n            <i data-role=\"remove\" data-index=\"" + index + "\" class=\"layui-icon\">&#xe616;</i>\n          </td>\n          <td class=\"default\">\n            <input\n              data-role=\"default\"\n              data-index=\"" + index + "\"\n              type=\"radio\"\n              name=\"radio_default_" + _this.id + "\"\n              title=\"\u82E5\u9009\u4E2D\uFF0C\u7528\u6237\u5728\u586B\u95EE\u5377\u65F6\u6B64\u9009\u9879\u4F1A\u9ED8\u8BA4\u88AB\u9009\u4E2D\"\n              lay-ignore\n            />\n          </td>\n          <td class=\"move default\">\n            <span data-role=\"up\" data-index=\"" + index + "\">\u4E0A\u79FB</span>\n            <span data-role=\"down\" data-index=\"" + index + "\">\u4E0B\u79FB</span>\n          </td>\n      </tr>\n    "; };
        return "\n      <div class=\"edit_question\">\n          <div class=\"editorWrap\">\n              <textarea\n                data-role=\"title\"\n                class=\"layui-textarea\"\n                rows=\"3\"\n                placeholder=\"\u8BF7\u8F93\u5165\u6807\u9898\"\n              >" + this.config.title + "</textarea>\n          </div>\n          <div class=\"selScrrol\">\n              <table class=\"table_option\" cellspacing=\"0\" cellpadding=\"0\" width=\"98%\">\n                  <tr class=\"table_head\">\n                      <td>\n                          <span>\u9009\u9879\u6587\u5B57</span>\n                      </td>\n                      <td class=\"default\">\u9ED8\u8BA4</td>\n                      <td class=\"default\">\u4E0A\u79FB\u4E0B\u79FB</td>\n                  </tr>\n                  " + this.config.options.map(function (option, index) { return _buildOption(option, index); }).join('\n') + "\n              </table>\n          </div>\n          <div class=\"addbtn\">\n              <span class=\"btn\">\n                  <span class=\"icon\">+</span>\n                  <a data-role=\"add\" class=\"aText\" href=\"javascript:\">\u6DFB\u52A0\u9009\u9879</a>\n              </span>\n          </div>\n          <div data-role=\"finish\" class=\"finishBtn\">\u5B8C\u6210\u7F16\u8F91</div>\n      </div>\n    ";
    };
    RadioTopic.prototype.bindEvent = function () {
        var _this = this;
        this.el.addEventListener('change', function (e) {
            var target = e.target;
            var _a = target.dataset, role = _a.role, index = _a.index;
            if (role === 'option') {
                _this.config.options[~~index] = target.value;
            }
            else if (role === 'title') {
                _this.config.title = target.value;
            }
            _this.build();
        });
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
