"use strict";
layui.use(['form', 'upload'], function () {
    var $ = layui.jquery, upload = layui.upload, form = layui.form;
    form.render('select', 'select');
    upload.render({
        elem: '#fileUp',
        url: 'https://httpbin.org/post',
        accept: 'file',
        size: 4096,
        done: function (res) {
            layer.msg('上传成功');
            console.log(res);
        },
    });
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
