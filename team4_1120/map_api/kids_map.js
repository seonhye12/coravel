var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.88562966, 127.7290584), // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


var positions = [
    {
        title: '강촌 레일바이크', 
        latlng: new kakao.maps.LatLng(37.8156478, 127.7121827)
    },
    {
        title: '로봇/애니메이션 박물관', 
        latlng: new kakao.maps.LatLng(37.89306106, 127.6918926)
    },
    {
        title: '강원도립화목원', 
        latlng: new kakao.maps.LatLng(37.92264446, 127.725156)
    },
    {
        title: '유아숲체험원', 
        latlng: new kakao.maps.LatLng(37.87371431, 127.7035178)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "map_api/images/kids_pin.png";// 제작자: Freepik - Flaticon
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(50, 50); 
    
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