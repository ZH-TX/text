// ==UserScript==
// @name         github跳转1.1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ZH-TX
// @require           https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js

// @match           *://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("a").prop("target","_blank");
})();
