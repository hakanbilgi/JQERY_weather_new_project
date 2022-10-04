const formJS = document.querySelectorAll("form")[0];
//jQUERY === $
//const formJquery = jQuery("form").eq(0);
const formJquery = $("form").eq(0);
const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const listJQ = $(".cities").eq(0);

//console.log(formJS);
//console.log(formJquery);
//console.log(inputJQ);

// get(index) ==> toArray(get()) , eq(index) 

//load VS DOMContentLoaded
//DOMContentLoaded ==> means page rendered, DOM is ready
//window load ==> (all content (e.g. images, styles etc) also loaded)

//window.onload = () =>{} ===> JS
// addEventListener ===> on

$(window).on("load", ()=>{
    console.log("window.load");
});

// document.addEventListener("DOMContentLoaded", ()=>{}) ==> JS

// $(document).on("DOMContentLoaded", ()=>{
//     console.log("DOMContentLoaded");
// });

$(document).ready(()=>{
    console.log("DOMContentLoaded");
});

// formJquery.on("submit", (e)=>{
//     e.preventDefault();
//     getWeatherDataFromApi();
// });

formJquery.submit((e)=>{
    e.preventDefault();
    getWeatherDataFromApi();
});


const getWeatherDataFromApi = () =>{
    console.log("AJAX Func. is called");
}

// XMLHTTPREQUEST(xhr) vs. fetch() vs. axios vs. $.ajax



    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: (response) => {},
      beforeSend: (request) => {},
      complete: () => {},
      error: (XMLHttpRequest) => {},
    });



 const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
 //alternative iconUrl
 const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;


 `
        <h2 class="city-name" data-name="${name}, ${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
            <img class="city-icon" src="${iconUrl}">
            <figcaption>${weather[0].description}</figcaption>
        </figure>`;
