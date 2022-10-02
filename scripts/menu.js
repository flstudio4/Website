/*

    Build and Repair Service website
    Author: Dmitrii Sumenko
    Date: 10/01/2022
    Filename: menu.js

    Functions for closing and opening of side panel in mobile menu

 */

"use strict";

    function openNav() {
        document.getElementById("mySidePanel").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidePanel").style.width = "0";
    }