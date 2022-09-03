 jQuery(document).ready(function() {

     "use strict"
     $('.slider').ripples({
         dropRadius: 80,
         perturbance: 0.01,

     });

     $(".text").typed({
         strings: ["<strong>WE Build </strong><strong class='primary'>Solutions</strong>", "<strong>Team</strong><strong class='primary'> ALPHA</strong>"],
         typespeed: 1.0,
         loop: true

     });

 });