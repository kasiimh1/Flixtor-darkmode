// ==UserScript==
// @name         Flixtor.to DarkMode
// @namespace    https://github.com/kasiimh1
// @version      0.1.1
// @description  Dark themes > light themes, enjoy!
// @author       Kasim Hussain
// @match        https://flixtor.to/*
// @grant        GM_addStyle
// ==/UserScript==

var darkMode=`

body, .card{
background-color: #000 !important;
color:white !important;
}

.main .card.back, .main .card.front, .show .card.back, .show .card.front {
 box-shadow: 0.2rem 0.2rem 1rem #17a2b8;
}
.section-watch-season, .table-episodes {
background-color: rgba(0,0,0,0.7) !important;
color: white !important;
}

`
GM_addStyle(darkMode);
