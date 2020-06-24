layui.use(['form', 'upload'], function() {
    var $ = layui.jquery,
    upload = layui.upload,
    form = layui.form;

    form.render('select', 'select');

    upload.render({
        elem: '#fileUp'
        ,url: 'https://httpbin.org/post' //改成您自己的上传接口
        ,accept: 'file' //普通文件
        // ,exts: 'zip|rar|7z' //只允许上传压缩文件
        ,size: 4096
        ,done: function(res){
            layer.msg('上传成功')
            console.log(res)
        }
    })
})

var E = window.wangEditor
var editor = new E('#editor', '#text')
editor.customConfig.menus = [
    'head',  // 标题
    'bold',  // 粗体
    'fontSize',  // 字号
    'fontName',  // 字体
    'italic',  // 斜体
    'underline',  // 下划线
    'strikeThrough',  // 删除线
    'foreColor',  // 文字颜色
    'backColor',  // 背景颜色
    'list',  // 列表
    'justify',  // 对齐方式
    'quote',  // 引用
    'emoticon',  // 表情
    'video',  // 插入视频
    'undo',  // 撤销
]
editor.create()
