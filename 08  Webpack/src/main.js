/* jshint esversion:6 */
//上面的代码用于提示现在使用ES6语法（不然总是提示出错）

import $ from 'jquery';
import "./css/index.css";

$(function () {
    $('li:odd').css('color', 'red');
    $('li:even').css('color', function () {
        return '#' + 'DA4396';
    });
});

