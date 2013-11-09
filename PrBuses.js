function initialize() {
  var HGrand = new google.maps.LatLng(42.659289, 21.160612);
  var Qafa = new google.maps.LatLng(42.664370,21.158810);
  var mapOptions = {
    zoom: 14,
    center: HGrand,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Hotel Grand</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Hotel Grand</b>' +
      'Linjat: 4 | 6 | 24" '+
      '</p>'+
      '</div>'+
      '</div>';

  var infoWindo = new google.maps.InfoWindow({
      content: contentString
  });

  setMarkers(map, busStops);
}

  var busStops = [
    ['Xh. e Matit',42.64573,21.19165,1],
    ['Isa Kastrati - Jug',42.65306,21.19151,2],
    ['Isa Kastrati - Veri',42.65859,21.18356,3],
    ['Ndalesë',42.65624,21.18053,4],
    ['Rr. Gazmend Zajmi',42.65583,21.17700,5],
    ['Qebaptore Prizreni',42.65583,21.17306,6],
    ['Sh.F. Ismail Qemajli',42.65206,21.17063,7],
    ['Qerimi',42.65302,21.16854,8],
    ['Konviktet',42.65278,21.16652,9],
    ['QKUK',42.64764,21.16206,10],
    ['Rrethi',42.64764,21.15845,11],
    ['Tregu i Ulpianës',42.65259,21.15845,12],
    ['RTK',42.65797,21.16042,13],
    ['BQK',42.65960,21.15861,14],
    ['P. i Rinisë',42.66104,21.15906,15],
    ['Kino ABC',42.16068,21.16068,16],
    ['Kuvendi Komunal',42.66688,21.16464,17],
    ['Sami Frashëri',42.66722,21.16774,18],
    ['Res. Antika',42.66657,21.17633,19],
    ['Taukbashçe',42.66639,21.18474,20],
    ['Ndalesë',42.66768,21.18763,21],
    ['AUK',42.66924,21.19060,22],
    ['Gërmi',42.67328,21.19817,23]
  ];

  function setMarkers(map, Stops){
    var image = {
      url: '/Users/bdaullxh/Desktop/PrBuses/bus.png',
      size: new google.maps.Size(32,37),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0,15)
    };

    for (var i=0; i<Stops.length; i++){
      var busStop = Stops[i];
      var stopLatLng = new google.maps.LatLng(busStop[1],busStop[2]);
      var marker = new google.maps.Marker({
        position: stopLatLng,
        map: map,
        icon: image,
        title: busStop[0],
        zIndex: busStop[3]
      });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);




