$(document).ready(function(){ 
var menu_logo= document.getElementById('menu_logo');
var scroll_start=0;
var startchange= document.getElementById('logo_header');
var offset= startchange.offset;
/*document.getElementById('building_section').style.display='none';*/
menu_logo.style.display='none';
/*clickEvent is used to close the navbar when user scrolls up/down*/
var is_navbar_close=true;
var clickEvent = new MouseEvent("click", {
   "view": window,
   "bubbles": true,
   "cancelable": false
});
// show/hide toggle button when screen resizes
function myFunction(x) {
   if (x.matches) { // If media query matches
      $('#menu_toggle').show();
      console.log('toggle show');
   } else {
      $('#menu_toggle').hide();
      console.log('toggle hide');
   }
 }
 
 var x = window.matchMedia("(max-width: 767px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes

$(window).bind('scroll', function() {
   var navHeight = startchange.offsetHeight;
       if ($(window).scrollTop() > navHeight) {
          console.log('fixed navHeight='+navHeight);
          /*$('#logo_header').css('height', '0px');*/
          $('#logo_header').css('top', '-8em');
          $('#nav_bar').css({
             'position':'fixed',
             'z-index':'999'
            });
          $('.Navbar').css({
            'background' : '#C1E5E5',
            'text-align' : 'right'
         });
          $('#menu_logo').show();
          $('#section_main').css('top','80em');

       }
       else {
          console.log('static navHeigh t='+navHeight);
          /*document.getElementById('logo_header').style.height='8em';*/
          $('#logo_header').css('top', '0em');
          $('#nav_bar').css('position','static');
          $('.Navbar').css({
            'background' : '#EFEFEF',
            'text-align' : 'center'
         });
          $('#menu_logo').hide();
       }
       /*close the navbar if it is open when scroling*/
       if(!is_navbar_close){
          document.getElementById('menu_toggle').dispatchEvent(clickEvent);
       }
   });
   window.onload=function(){
      function classToggle() {
         const navs = document.querySelectorAll('.Navbar__Items');
         /*check if navbar is close */
         is_navbar_close=!is_navbar_close;
         console.log('navbar is close:'+is_navbar_close);
         navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
       }
       
       document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);
      }
      /*adjust the size of the navbar items everytime the width gets changed */
      if($(window).width()<767){
         $(".Navbar__Items a").css({
            'flex' : '100%',
            /*this number(140 & 135) is just a made up number that works fine :/ */
            'width' : $( window ).width()-140+'px'
         })
         $(".Navbar__Items--right a").css({
            'flex' : '10%',
            'width' : $( window ).width()-135+'px'
         })
      }

      $( window ).resize(function() {
         if($( window ).width()<767){
         $(".Navbar__Items a").css({
            'flex' : '100%',
            'width' : $( window ).width()-140+'px'
         })
         $(".Navbar__Items--right a").css({
            'flex' : '10%',
            'width' : $( window ).width()-135+'px'
         })

         console.log($( window ).width()-140+'px')
       }
       else{
         $(".Navbar__Items a").css({
            'flex' : 'auto',
            'width' : 'auto'
         })
       }
      });
      //change the pattern of the grid-container if it is in mobile
      if($(window).width()<767){

         $(".grid-container").css({
            'grid-template-areas' :
            "'item1 item1 item1 item2 item2''item3 item3 item4 item4 item4''item6 item6 item6 item5 item5''item7 item7 item8 item8 item8'",
            'height':'150vh'
         })
         $(".grid-container>div").css({
            'font-size':'30px'
         })
         console.log('grid container set to mobile version');
      }
      $( window ).resize(function() {
      if($(window).width()<767){

         $(".grid-container").css({
            'grid-template-areas' :
            "'item1 item1 item1 item2 item2''item3 item3 item4 item4 item4''item6 item6 item6 item5 item5''item7 item7 item8 item8 item8'",
            'height':'150vh'
         })
         $(".grid-container>div").css({
            'font-size':'30px'
         })
         
      }
      else{
         $(".grid-container").css({
            'grid-template-areas' :
            "'item2 item3 item3 item1 item1 item1''item2 item3 item3 item4 item4 item5''item2 item6 item7 item8 item8 item5'",
            'height':'70vh'
         })
         $(".grid-container>div").css({
            'font-size':'30px'
         })
      }
      });
      
      
      ///Sliders
      $('.pictureSlider').slick({
         dots: true,
         arrows:false,
         infinite: true,
         speed: 300,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [
           
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
       });

       $('.profileSlider').slick({
         dots: true,
         arrows:false,
         infinite: true,
         speed: 300,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [
           
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
       });


});
