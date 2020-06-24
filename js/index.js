"use strict";
layui.use(['form', 'upload'], function () {
    var $ = layui.jquery, upload = layui.upload, form = layui.form;
});
var E = window.wangEditor;
var editor = new E('#editor', '#text');
editor.customConfig.menus = [
    'head',
    'bold',
    'fontSize',
    'fontName',
    'italic',
    'underline',
    'strikeThrough',
    'foreColor',
    'backColor',
    'list',
    'justify',
    'quote',
    'emoticon',
    'video',
    'undo',
];
editor.create();
