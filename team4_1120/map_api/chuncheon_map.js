var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.906995037, 127.752692929), // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


var positions = [
    {
        title: '국립춘천박물관', 
        latlng: new kakao.maps.LatLng(37.86384113, 127.7520879)
    },
    {
        title: '소양강댐', 
        latlng: new kakao.maps.LatLng(37.95215033, 127.8150475)
    },
    {
        title: '강원도립화목원', 
        latlng: new kakao.maps.LatLng(37.92264446, 127.725156)
    },
    {
        title: '춘천 막국수 체험박물관',
        latlng: new kakao.maps.LatLng(37.94879747, 127.7497806)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "map_api/images/cc_pin.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(35, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}