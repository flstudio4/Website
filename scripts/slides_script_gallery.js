/*

    Build and Repair Service website
    Author: Dmitrii Sumenko
    Date: 11/27/2022
    Filename: slides_script_gallery.js

    Functions for closing and opening of side panel in mobile menu

 */

"use strict";

$(document).ready( () => {
        if ($(document).width() > 640) {
            $("#slider").bxSlider({
                auto: true,
                autoControls: true,
                captions: true,
                minSlides: 1,
                maxSlides: 1,
                slideWidth: 550,
                slideMargin: 10
            })
        } else {
            $("#slider").bxSlider({
                auto: true,
                autoControls: true,
                captions: true,
                minSlides: 1,
                maxSlides: 1,
                slideWidth: 350,
                slideMargin: 10
            });
        }
    }
);