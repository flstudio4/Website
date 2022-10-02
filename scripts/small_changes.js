
/*
    This script will display current year in footer
    FileName: small_changes.js
    Author: Dmitrii Sumenko
    Date: 9/17/2022

 */

"use strict";

    // Footer copyright automatic year change

    const date = new Date().getFullYear();
    const html = `<p>&copy;Dmitrii Sumenko design ${date}</p>`;
    document.write(html);


    // displaying Google Map on contacts.html page

    try {
        document.querySelector("div#map").innerHTML = "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1484." +
        "9388541062203!2d-87.68717862755169!3d41.89548704462581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d4d3eb608" +
        "bb%3A0xdbfb9c8d2fc2b257!2s2345%20W%20Chicago%20Ave%2C%20Chicago%2C%20IL%2060622!5e0!3m2!1sen!2sus!4v1663364508981!5m2!1se" +
        "n!2sus\"\n" + " width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"" +
        "no-referrer-when-downgrade\"></iframe>";
    } catch (TypeError) {
        console.log("Type error");
    }