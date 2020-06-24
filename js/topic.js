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
    function Topic(_a) {
        var el = _a.el, _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.no, no = _c === void 0 ? 1 : _c;
        this.el = el;
        this.title = title;
        this.no = no;
    }
    return Topic;
}());
var RadioTopic = (function (_super) {
    __extends(RadioTopic, _super);
    function RadioTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioTopic.prototype.create = function () {
        throw new Error('Method not implemented.');
    };
    RadioTopic.prototype.mouted = function () {
        throw new Error('Method not implemented.');
    };
    return RadioTopic;
}(Topic));
var CheckboxTopic = (function (_super) {
    __extends(CheckboxTopic, _super);
    function CheckboxTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxTopic.prototype.create = function () {
        throw new Error('Method not implemented.');
    };
    CheckboxTopic.prototype.mouted = function () {
        throw new Error('Method not implemented.');
    };
    return CheckboxTopic;
}(Topic));
