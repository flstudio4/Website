/*

    Build and Repair Service website
    Author: Dmitrii Sumenko
    Date: 10/01/2022
    FileName: toggle.js

 */

"use strict";

    // the event handler for the click event of each h2 element
    const toggle = evt => {
        const h2Element = evt.currentTarget;                 // get the clicked h2 element
        const divElement = h2Element.nextElementSibling;     // get h2's sibling div

        h2Element.classList.toggle("minus");
        divElement.classList.toggle("open");

        evt.preventDefault();   // cancel default action of h2 tag's <a> tag
    };

    document.addEventListener("DOMContentLoaded", () => {

        const faqs = document.querySelector("#faqs");

        // get the h2 tags
        const h2Elements = faqs.querySelectorAll("#faqs h2");

        // attach event handler for each h2 tag
        for (let h2Element of h2Elements) {
            h2Element.addEventListener("click", toggle);
        }

    });