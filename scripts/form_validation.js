/*

    Build and Repair Service website
    Author: Dmitrii Sumenko
    Date: 11/15/2022
    Filename: form_validation.js

    Form validation for build.html

    Algorithm:
    	1. When page is loaded, focus is not gained by first text box, because bottom of the page will be displayed.
    	2. When submit button is clicked, click event is triggered
    	3. If name box is empty, isValid set to false and should not be empty is displayed, else the value is trimmed and put
    	   in the corresponding box back.
    	4. If street box is empty, isValid set to false and should not be empty is displayed, else the value is trimmed and put
    	   in the corresponding box back.
    	5. If city box is empty, isValid set to false and should not be empty is displayed, else the value is trimmed and put
    	   in the corresponding box back.
    	6. If state box is empty, isValid set to false and should not be empty is displayed, else the value is trimmed and put
    	   in the corresponding box back.
    	7. a. If zip text box is empty, isValid set to false and should not be empty is displayed, else the value is trimmed and put
    	      in the corresponding box back.
    	   b. or if zip text box is not empty, and if it's a number, and if it's not 5 digits long, Length of zip should be 5 digits long
    	      is displayed.
    	   c. if zip tex box is not a number, Zip code must be numeric is displayed
    	   d. else the value is trimmed and put in the corresponding box back.
    	8. Phone text box follow the same pattern, only difference it should be 10 digits long
    	9. a. If email text box is empty, isValid set to false and should not be empty is displayed
    	   b. If string in email text box is not matching the pattern, enter valid email is displayed
    	   c. else the value is trimmed and put in the corresponding box back.
    	10. If all the fields are correct, all the info submitted to designated web server.
    	11. If any of the fields is incorrect, submitting is prevented.

*/


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
        const emailPattern = /\b[A-Za-z\d._%+-]+@[A-Za-z\d.-]+\.[A-Za-z]{2,4}\b/;

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