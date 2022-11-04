/*

    Build and Repair Service website
    Author: Dmitrii Sumenko
    Date: 10/01/2022
    FileName: toggle.js

 */

"use strict";
$(document).ready( () => {

    $("#faqs h2").click( evt => {
        $(evt.currentTarget).toggleClass("minus");
        $(evt.currentTarget).next().slideToggle(700);
    });

});