/*

    Build and Repair Service website
    Author: Dmitrii Sumenko
    Date: 11/27/2022
    Filename: slides_script_gallery.js

    Script for slider on gallery.html

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
                slideWidth: 320,
                slideMargin: 10
            });
        }
    }
);