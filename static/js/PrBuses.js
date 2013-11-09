function initialize() {
  var HGrand = new google.maps.LatLng(42.659289, 21.160612);
  var Qafa = new google.maps.LatLng(42.664370,21.158810);
  var mapOptions = {
    zoom: 16,
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
    ['1',21.180758609742387,42.656191696479247,1],
    ['2',21.18025787475197,42.656157655429872,2],
    ['3',21.179862522072835,42.656125067469567,3],
    ['4',21.179624562366147,42.656095530146978,4],
    ['5',21.179399783558072,42.65605416850768,5],
    ['6',21.179164044645571,42.655994464898612,6],
    ['7',21.178898062624576,42.655902673392738,7],
    ['8',21.178476965331129,42.655689210214497,8],
    ['9',21.178283348104564,42.655582924012791,9],
    ['10',21.178216531394252,42.655552863832412,10],
    ['11',21.178108840963347,42.655503501269735,11],
    ['12',21.178011494303984,42.65549569418895,12],
    ['13',21.177895757366166,42.655519610086166,13],
    ['14',21.17746699814024,42.65567663056423,14],
    ['15',21.177266865804672,42.655745394484313,15],
    ['16',21.176856431721177,42.655831887965292,16],
    ['17',21.176377916863068,42.655895462921158,17],
    ['18',21.175870245341358,42.655918261490321,18],
    ['19',21.175235571309351,42.655900644623763,19],
    ['20',21.174519067262107,42.655882802260905,20],
    ['21',21.174108881758421,42.655869877535523,21],
    ['22',21.173965502302163,42.655864172751514,22],
    ['23',21.173601071366473,42.655844451185416,23]

  
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
      var stopLatLng = new google.maps.LatLng(busStop[2],busStop[1]);
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




