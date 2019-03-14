// ==UserScript==
// @name         Remove Tongji IDS CAPTCHA
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Tongji IDS CAPTCHA
// @author       Kowalski Dark <darkkowalski2012@gmail.com>
// @match        https://ids.tongji.edu.cn:8443/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByTagName('strong')[0].innerHTML = "迫 真 身 份 认 证 ?";

    // Submit form by yourself
    document.getElementsByName("btsubmit")[0].value = "MDZZ! Login!";
    document.getElementsByName("btsubmit")[0].onclick = function() {document.forms[0].submit()};

    // Remove Comical CAPTCHA box
    var txticode = document.getElementById("Txtidcode");
    txticode.parentNode.removeChild(txticode);
    var idcode = document.getElementById("idcode");
    idcode.parentNode.removeChild(idcode);

})();
