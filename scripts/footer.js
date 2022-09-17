
/*
    This script will display current year in footer
    FileName: footer.js
    Author: Dmitrii Sumenko
    Date: 9/17/2022

 */

"use strict";

const date = new Date().getFullYear();
const html = `<p>&copy;Dmitrii Sumenko design ${date}</p>`;
document.write(html);