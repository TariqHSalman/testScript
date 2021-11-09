<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="robots" content="noindex">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style type="text/css">
    .sticky-fix.blog-page .header-blog {
      position: absolute
    }

    .sticky-fix.blog-page .featured-blog-posts {
      margin-top: 80px
    }

    .sticky-search #header-search-plugin-sticky {
      position: fixed;
      z-index: 1001;
      width: 1170px;
      margin: 20px auto 0;
      padding: 0 15px;
      max-width: none;
      top: 0;
      left: 0;
      right: 0;
      animation: fadein .3s ease
    }

    .sticky-search .mashvisor-search-container {
      width: 388px;
      height: 0;
      float: right
    }

    .sticky-search .mashvisor-search-input {
      width: 256px
    }

    .sticky-search .mashvisor-search-button {
      width: 132px
    }

    .sticky-search .pac-container {
      position: fixed !important;
      top: 60px !important
    }

    .sticky {
      display: none;
      position: fixed;
      background: #414562;
      width: 100%;
      height: 80px;
      top: 0;
      color: #fff;
      animation: fadein .3s ease;
      z-index: 9;
    }

    .sticky-search .sticky {
      display: block
    }

    .sticky__inner {
      width: 1170px;
      margin: 0 auto;
      padding: 0 15px
    }

    .sticky__inner .sticky__logo {
      background: url('https://www.mashvisor.com/images/mashvisor_white_logo.png') no-repeat;
      position: relative;
      top: 19px;
      background-size: 100%;
      display: inline-block;
      width: 170px;
      height: 50px;
      float: left;
    }

    .sticky__slogan {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      float: left;
      margin: 27px 0 0 319px;

    }

    @media (max-width:1199px) {
      .sticky-search #header-search-plugin-sticky {
        width: 970px
      }

      .sticky__slogan {
        margin-left: 190px
      }

      .sticky-search .mashvisor-search-container {
        width: 318px
      }

      .sticky-search .mashvisor-search-input {
        width: 186px
      }

      .sticky-fix.blog-page .widget-area .inbound-cta-container {
        width: 100% !important
      }

      .sticky-fix.blog-page .widget-area .inbound-cta-container img {
        width: 100%;
        height: auto
      }
    }

    @media (max-width:991px) {
      .sticky-search #header-search-plugin-sticky {
        width: 750px
      }

      .sticky__inner .sticky__logo {
        display: none
      }

      .sticky__slogan {
        margin-left: 137px;
      }
    }

    @media (max-width:768px) {
      .sticky-search #header-search-plugin-sticky {
        width: 318px;
        top: 84%;
      }

      .sticky__inner {
        width: 318px;
      }

      .sticky__inner .sticky__logo {
        background: url('./mashvisor_just_logo.png') no-repeat;
        position: relative;
        background-size: 100%;
        display: inline-block;
        width: 21px;
        height: 39px;
        margin-top: -8px;
        margin-right: 11px;
      }

      .sticky__slogan {
        margin-left: 0px;
        margin-top: 12px;
        font-weight: bold;
      }

      .sticky-search .mashvisor-search-button {
        width: 20%;
        margin-right: -28px;
      }

      .sticky-search .mashvisor-search-input {
        width: 283px;
        margin-left: 0px;
      }

      .sticky-search .mashvisor-search-container {
        width: 318px;
        margin-top: 27px;
        margin-left: -13px;
      }

      .sticky-search .sticky {
        height: 105px;
        top: 84%;
      }
    }

    @media (max-width:320px) {
      .sticky-search #header-search-plugin-sticky {
        width: 318px;
        top: 84%;
      }

      .sticky__inner .sticky__logo {
        background: url('./mashvisor_just_logo.png') no-repeat;
        position: relative;
        position: relative;
        background-size: 100%;
        display: inline-block;
        width: 21px;
        height: 39px;
        margin-left: -7px;
        float: left;
        margin-top: -8px;
      }

      .sticky__slogan {
        margin-left: 9px;
        margin-top: 12px;
        font-weight: bold;
        font-size: 16px;
      }

      .sticky-search .mashvisor-search-button {
        width: 20%;
        margin-right: 29px;
      }

      .sticky-search .mashvisor-search-input {
        width: 208px;
        margin-left: 0px;
      }

      .sticky-search .mashvisor-search-container {
        width: 296px;
        margin-top: 27px;
        margin-left: -13px;
      }

      .sticky-search .sticky {
        height: 100px;
        top: 85%;
      }
    }

    @keyframes fadein {
      from {
        opacity: 0
      }

      to {
        opacity: 1
      }
    }


    .mashvisor-search-container {
      display: block;
      position: relative;
    }

    .mashvisor-search-input {
      font-family: Lato, Tahoma, verdana, sans-serif;
      display: table-cell;
      width: 80%;
      height: 27px;
      border-radius: 8px 0 0 8px;
      padding: 6px 15px;
      border-width: 0px;
      outline: none;
      font-size: 13px;
      font-weight: bold;
      position: absolute;
      top: 0px;
    }

    .mashvisor-search-button {
      font-family: Lato, "proximanovaRegular", sans-serif;
      background: #3ba1df;
      border-color: #3ba1df;
      box-shadow: 10px 0px 33px rgba(0, 0, 0, 0.15);
      text-decoration: none;
      display: table-cell;
      width: 20%;
      height: 40px;
      font-size: 16px;
      border-radius: 0 8px 8px 0;
      border: 0px;
      color: white;
      outline: none;
      position: absolute;
      top: 0px;
      right: 0px;
    }

    .mashvisor-search-button-icon-image {
      width: 16px;
      height: 16px;
    }

    @media (max-width: 651px) {
      .mashvisor-search-button-text {
        display: none;
      }

      .mashvisor-search-button-icon {
        display: inline-block;
      }

      .mashvisor-search-input {
        font-size: 12px;
        padding: 6px 11px;
      }
    }

    @media (min-width: 652px) {
      .mashvisor-search-button-text {
        display: inline-block;
      }

      .mashvisor-search-button-icon {
        display: none;
      }
    }
  </style>
</head>

<body>
  <div id="header-search-plugin-sticky">
    <div class="mashvisor-search-container">
      <input type="text" class="mashvisor-search-input-position mashvisor-search-input" placeholder="Enter a Location"
        autocomplete="off" id="sticky_search">
      <a href="www.mashvisor.com/explore" id="start_analyze_anchor" target="_top"></a>
      <button class="mashvisor-search-button" id="sticky_analyze" />
      <span class="mashvisor-search-button-text">Start Analyzing</span>
      <span class="mashvisor-search-button-icon">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfgCxQJEx+RDTcTAAADmUlEQVRo3sWYTUhUYRSGz50Zyp+EFqaMkEWYC4mINtYiIiiC0BYtAldFgWFm5cJFQQsRXOqiaJO0CCJa1KJCMQgiF9UiKkw3FeGEmZIikn/Z+LQwS5vz3fnu/a7Tmd3hnPd95t7v93piGZRJjVRKUsokKUmJy8jv3yfp9t7bqoQKqrjMSxYxxyDtVOOthXktb7GNIU4Rj9J8L8+szZdjgKPRmJdzP7D5cvSxy9V+H2Oh7QFmqHOxr+eHk/1StBMLY57gWgTmS/GQouAA0dkD9AacFdRbyS4wTIo5q9qOYEPP/92/ppVqipcXHDaykxb6SPt2nbC1L/cZ+YvcpsLYWUon88beOfbYAZjn/dPs85qt3DX291vMB/Ya26/aDiSajS/jZPZmfdFdoMHyDS6pHGFK1UmR599YayAPZC8iwiEWVKUW/zZ9x7sa1F5EhEZVa4JCc0uVYeiF3FrpUvWOmRsuK+WL4Xc0itWRcMvc8FIpvx3WXkSEK4riOAm9uEw9bFUE9FytWcikonlAq41JjWSe5d54H1wAvGnpUdK1OkClkn3gYm9U0JwkJkkl2+0M0CNk5DQniUmZkv3o6u9NykRGUnNSn8BPGXd+AiJfMzIl2sqiAYx5iHuMKl4lGkAmVToCe11lnQYwkpFTOENEqZJTXq0GsJ6NawIw7323AxApd3UnXzbZ/H8TwGHn/39QMo9hKR3gk5J1v2BqCi/USrYr20aaUnEIEowoqsdN5YNKcacTwBn1SLLZVN6uFM+zNbR9AV8UxX5zQ7XKezc0QKuq12Ru8BhSW5pD2deot4Np37WFUypAmiOB7XcYbgY3/dviDKhtUxwKaJ9SdWbZlq31KHos0Bjg4U8ZVNps2vswRRfFWbsLaDXeDFMU2ADsYsaIMMUV882GBGfUibcc120fYR1+Mckd6laPZfKp5Ya66q2Oi7YI7VmlFvnGO57wmLd8zfJtJDgCMR5aSwYNS4Qiev83QpyO/4wgwgnLj3BriLCH/tAmKa5HgRDjpGFh9YtZ2igQ4UIECCLk0cKEtfk0N/+u+REhiFDIMW4xnsW8n6Z/N1zOR4QgIkKCA3TwiFeM/Fl+5hjmOZ0cNx22IkVYIRsnyRY2WNU2rQlCIFw/BOut3g3hnBHgB7tzg9BoRHiUEwAfhOEcAYhwVgUYdVcOgpD5RdL9c1gghIZ/ENLszymACKdX7LNpLuXYXkSEHdzjM6N0L/37XzZGFZ37XoBzAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTExLTIwVDA5OjE5OjMxKzAxOjAwRHu7RgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0xMS0yMFQwOToxOTozMSswMTowMDUmA/oAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
          class="mashvisor-search-button-icon-image">
      </span>
      </button>
    </div>
  </div>
  <script type="text/javascript">
    let loaded=false;
    window.addEventListener("load", (function () {
      function cleanEventListenerAmp() {
        window.removeEventListener('mousemove', onInteractionCallback);
        window.removeEventListener('scroll', onInteractionCallback);
        window.removeEventListener('touchstart', onInteractionCallback);
      };
      function onInteractionCallback() {
        var script = document.createElement('script');
        script.src = "//maps.googleapis.com/maps/api/js?libraries=places&amp;key=AIzaSyDt9U0GJGEi9MI5bpcRuWJIeN04J58CHsM";
        script.type="text/javascript"
        var link = document.createElement('link');
        link.href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap"
        link.rel="stylesheet"
        document.head.appendChild(script);
        document.head.appendChild(link);
        script.onload = function () {
          var autocomplete = new google.maps.places.Autocomplete(input, options);
    document.getElementById('sticky_analyze').addEventListener('click', inputClickFunction);
    autocomplete.addListener('place_changed', inputClickFunction.bind(this));
    input.addEventListener('input', function(){
      if(input.value && input.value.length === 0){
        window.parent.postMessage({
          sentinel: 'amp',
          type: 'embed-size',
          height: '50px'
        }, '*');
      }else if(input.value && input.value.length > 0){
        window.parent.postMessage({
          sentinel: 'amp',
          type: 'embed-size',
          height: '250px'
        }, '*');
      } else {
        window.parent.postMessage({
          sentinel: 'amp',
          type: 'embed-size',
          height: '50px'
        }, '*');
      }
    })
    function inputClickFunction() {
    var location = autocomplete.getPlace();
    var _location = null;
    if(location){
      _location = getLocationFromComponents(location);
    }
    if (_location) {

      var city = _location.city || '';
      var state = _location.state || '';
      var country = _location.country || '';
      var latitude = _location.lat || '';
      var longitude = _location.lng || '';
      var zipcode = _location.zipCode || '';
      var neighborhood = _location.neighborhood || '';
      var streetNumber = _location.streetNumber || '';
      var routeLong = _location.routeLong || '';
      var routeShort = _location.routeShort || '';


      document.cookie = 'lastSearchedNeighborhood' + '=' + neighborhood + ';path=/' ;
      document.cookie = 'lastSearchedCity' + '=' + city + ';path=/' ;
      document.cookie = 'lastSearchedState' + '=' + state + ';path=/' ;
      if( latitude )
        document.cookie = 'lat' + '=' + latitude + ';path=/' ;
      if( longitude )
      document.cookie = 'lng' + '=' + longitude + ';path=/' ;
        // add this part to enabel locations support  ~ neighborhood='+neighborhood+'&zipCode='+zipcode+'&
        var nextLocation = '';
        nextLocation = 'https://www.mashvisor.com/explore/search?city=' + city + '&state=' + state + '&country=' + country + '&lat=' + latitude + '&lng=' + longitude ;
        if(_location.hasAddress){
          nextLocation +=  '&zipCode=' + zipcode + '&streetNumber=' + streetNumber + '&routeLong=' + routeLong + '&routeShort=' + routeShort + '&neighborhood=' + neighborhood + '&hasAddress=' + 'true';
        }
        setTimeout(function(){
          // window.parent.location.href = nextLocation;
          var search_bar = document.getElementById('start_analyze_anchor');
          search_bar.href = nextLocation;
          search_bar.click();
        }, 1000);
    } else {
      setTimeout(function(){
        // window.parent.location.href = 'https://www.mashvisor.com/explore/';
        var search_bar = document.getElementById('start_analyze_anchor');
          search_bar.href = 'https://www.mashvisor.com/explore/';
          search_bar.click();
      }, 1000);
    }
  };
};       
cleanEventListenerAmp();
    };
    window.addEventListener('touchstart', onInteractionCallback);
    window.addEventListener('mousemove', onInteractionCallback);
    window.addEventListener('scroll', onInteractionCallback, { passive: true });

  }));

  var input = document.getElementById('sticky_search');
  var place;
  var options = {
    componentRestrictions: {
      country: 'us',
    },
    types: ['geocode'],
    fields: ['address_components', 'geometry', 'formatted_address']
  };
  function getLocationFromComponents(components) {
    var location = {};
    if(components){
      if(components.address_components){
        for(var index in components.address_components) {
            var component = components.address_components[index];
            if(component.types && component.types[0] == 'locality') {
              location.city = component.long_name;
              continue;
            }else if(component.types && component.types[0] == 'administrative_area_level_2'){
              if(!location.city)
              location.city = component.long_name;
              continue;
            }

            if(component.types && component.types[0] == 'administrative_area_level_1') {
                location.state = component.short_name;
                continue;
            }

            if(component.types && component.types[0] == 'country') {
                location.country = component.long_name;
                continue;
            }

            if(component.types && component.types[0] == 'postal_code') {
                location.zipCode = component.long_name;
                continue;
            }

            if(component.types && component.types[0] == 'neighborhood') {
                location.neighborhood = component.long_name;
                continue;
            }

            if(component.types && component.types[0] == 'street_number'){
              location.streetNumber = component.long_name;
            }
            if(component.types && component.types[0] == 'route'){
              location.routeLong = component.long_name;
              location.routeShort = component.short_name;
            }
        }
      }
      if( components.geometry && components.geometry.location ) {
          location.lat = components.geometry.location.lat() ;
          location.lng = components.geometry.location.lng() ;
      }
    }
    if(location.streetNumber && location.routeLong && location.routeShort){
      location.hasAddress = 'true';
    }
    return location;
  }
  </script>
</body>

</html>
