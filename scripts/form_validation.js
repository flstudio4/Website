"use strict";

$(document).ready( () => {

    $("#submit").click( evt => {

       let isValid = true;

       const name = $("#name").val().trim();

       if (name === "") {
           isValid = false;
           $("#name").next().text("Should not be empty");
       }
       else {
           $("#name").val(name);
           $("#name").next().text("");
       }

       const street = $("#street").val().trim();

       if (street === "") {
           $("#street").next().text("Should not be empty");
           isValid = false;
       }
       else {
           $("#street").val(street);
           $("#street").next().text("");
       }

       const city = $("#city").val().trim();

       if (city === "") {
           $("#city").next().text("Should not be empty");
           isValid = false;
       }
       else {
           $("#city").val(city);
           $("#city").next().text("");
       }

        // state

        const state = $("#state").val().trim();

        if (state === "") {
            $("#state").next().text("Should not be empty");
            isValid = false;
        }

        else {
            $("#state").val(state.toUpperCase());
            $("#state").next().text("");
        }

        // zip

        const zip = $("#zip").val().trim();

        if (zip === "") {
            $("#zip").next().text("Should not be empty");
            isValid = false;
        }
        else if ((zip.length > 5 || zip.length < 5) && !isNaN(zip)) {
            $("#zip").next().text("Length of zip should be 5 digits long");
            isValid = false;
        }
        else if (isNaN(zip)) {
            $("#zip").next().text("Zip code must be numeric");
            isValid = false;
        }
        else {
            $("#zip").val(zip);
            $("#zip").next().text("");
        }

        // phone

        const phone = $("#phone").val().trim();

        if (phone === "") {
            $("#phone").next().text("Should not be empty");
            isValid = false;
        }
        else if (phone.length !== 10 && !isNaN(phone)) {
            $("#phone").next().text("must be 10 digits long");
            isValid = false;
        }
        else if (isNaN(phone)) {
            $("#phone").next().text("Must be numeric");
        }
        else {
            $("#phone").val(phone);
            $("#phone").next().text("");
        }

        // mail

        const mail = $("#mail").val().trim();
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

        if (mail !== "" && !emailPattern.test(mail)) {
            $("#mail").next().text("Enter valid email");
            isValid = false;
        }

        else if (mail === "") {
            $("#mail").next().text("Should not be empty");
            isValid = false;
        }
        else {
            $("#mail").val(mail);
            $("#mail").next().text("*");
        }

       if(isValid === false) {
           evt.preventDefault();
       }

    });
});