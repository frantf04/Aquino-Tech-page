/* -------------------------------------------------------------------------- */
/*                              Elementos del DOM                             */
/* -------------------------------------------------------------------------- */

const main = document.querySelector(".main");
const bar__menu = document.querySelector(".bar__menu");
const arrow_up = document.querySelector(".arrow_up");
const a_servicio = document.querySelector(".a_servicio");


/* -------------------------------------------------------------------------- */
/*                          toggle para el menu para movil                    */
/* -------------------------------------------------------------------------- */


bar__menu.addEventListener("click", (() => {
  document.querySelector(".nav__movil").classList.toggle("active")
}));

a_servicio.addEventListener("click", (() => {
  document.querySelector(".nav__movil").classList.toggle("active")
}));
main.addEventListener("click", (() => {
  document.querySelector(".nav__movil").classList.remove("active")
}));


/* -------------------------------------------------------------------------- */
/*                     boton de ir arriba, echo con jquery                    */
/* -------------------------------------------------------------------------- */

$(document).ready((function () {
  $(".arrow_up").slideUp(400), $(".arrow_up").click((function () {
    $("body, html").animate({
      scrollTop: "0px"
    }, 300)
  })), $(window).scroll((function () {
    $(this).scrollTop() > 150 ? $(".arrow_up").slideDown(400) : $(".arrow_up").slideUp(400)
  }))
}));

/* -------------------------------------------------------------------------- */
/*                         Animaciones al hacer scroll                        */
/* -------------------------------------------------------------------------- */
/* -------------------------------- animcion -------------------------------- */
let card1 = {
  distance: "30px",
  origin: "bottom",
  duration: 500,
  easing: "ease-in-out",
  opacity: null,
  reset: true
};
/* -------------------------------- animcion -------------------------------- */
let card2 = {
  distance: "30px",
  origin: "bottom",
  duration: 500,
  easing: "ease",
  opacity: !0,
  reset: !0
};

/* -------------------------------- animcion -------------------------------- */
let p_home = {
    distance: "10px",
    origin: "bottom",
    duration: 500,
    easing: "linear",
    opacity: !1,
    reset: !0
};

/* ----------- llamando animacion y aplicandola a elemento del dom ---------- */

ScrollReveal().reveal(".p_home", p_home);
ScrollReveal().reveal(".card1", card1);
ScrollReveal().reveal(".card2", card2);


/* -------------------------------------------------------------------------- */
/*                             Bienvenida con voz                             */
/* -------------------------------------------------------------------------- */

