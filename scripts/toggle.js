/*

    Build and Repair Service website
    Author: Dmitrii Sumenko
    Date: 11/01/2022
    FileName: toggle.js

    This script show/hide div elements with animation on how_to.html

 */

"use strict";
$(document).ready( () => {

    $("#faqs h2").click( evt => {
        $(evt.currentTarget).toggleClass("minus");
        $(evt.currentTarget).next().slideToggle(700);
        evt.preventDefault();
    });

});