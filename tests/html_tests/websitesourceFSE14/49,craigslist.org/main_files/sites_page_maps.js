$(document).ready(function(){var clMapsUrl='//map{s}.craigslist.org/t06/{z}/{x}/{y}.png';var attrib='&copy; craigslist - Map data '
+' <a href="http://www.naturalearthdata.com/">Natural Earth</a>'
+', &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
var lowzoom=new L.TileLayer('//map{s}.craigslist.org/lowzoom/{z}/{x}/{y}.png',{subdomains:[0,1,2,3,4,5,6,7,8,9],attribution:'',tms:true,minZoom:0,maxZoom:5});var tiles=new L.TileLayer(clMapsUrl,{subdomains:[0,1,2,3,4,5,6,7,8,9],attribution:attrib,minZoom:6,maxZoom:11});var map=L.map('map',{center:new L.LatLng(16,5),zoom:2,minZoom:1,maxZoom:11,maxBounds:[[-90,-180],[90,180]],layers:[lowzoom,tiles]});map.attributionControl.setPrefix('');var icon=L.divIcon({className:'cl-marker-icon',iconSize:[15,15]});$.getJSON('/about/areas.json',function(data){var cluster=new L.MarkerClusterGroup({maxClusterRadius:35,spiderfyOnMaxZoom:false,showCoverageOnHover:false,iconCreateFunction:function(cluster){return L.divIcon({html:'<span>+</span>',className:'cl-marker-icon',iconSize:[15,15],});}});for(i=0;i<data.length;i++){popupContent='<a href="http://'+data[i]['hostname']+'.craigslist.org">'+data[i]['name']+'</a>';popupContent+=(data[i]['region'])?'<br>'+data[i]['region']:'';popupContent+=', '+data[i]['country'];var marker=L.marker([data[i]['lat'],data[i]['lon']],{'icon':icon}).bindPopup(popupContent);cluster.addLayer(marker);}
map.addLayer(cluster);});$('a.leaflet-control-zoom-in').text('')
$('a.leaflet-control-zoom-out').text('')});