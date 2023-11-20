var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.85700804, 127.73647340), // 지도의 중심좌표
    level: 7, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


var positions = [
    {
        title: '처방전', 
        latlng: new kakao.maps.LatLng(37.8774023, 127.7276116)
    },
    {
        title: '닥터샌드위치', 
        latlng: new kakao.maps.LatLng(37.8578603, 127.7425674)
    },
    {
        title: '모찌이야기', 
        latlng: new kakao.maps.LatLng(37.867585, 127.7200451)
    },
    {
        title: '인트로', 
        latlng: new kakao.maps.LatLng(37.8742539, 127.7415362)
    },
    {
        title: '카페뜰', 
        latlng: new kakao.maps.LatLng(37.84069093, 127.731461)
    },
    {
        title: '마릴본', 
        latlng: new kakao.maps.LatLng(37.872179, 127.7268306)
    },
    {
        title: '누벨퀴진', 
        latlng: new kakao.maps.LatLng(37.8580905, 127.7576415)
    },
    {
        title: '예담더갤러리', 
        latlng: new kakao.maps.LatLng(37.87488439, 127.7369634)
    },
    {
        title: '카페 학곡', 
        latlng: new kakao.maps.LatLng(37.8338663, 127.7598463)
    },
    {
        title: '그다방', 
        latlng: new kakao.maps.LatLng(37.87516725, 127.7035647)
    },
    {
        title: '화양연화커피', 
        latlng: new kakao.maps.LatLng(37.8580167, 127.7428373)
    }

];



// 마커 이미지의 이미지 주소입니다
var imageSrc = "map_api/images/cafe_pin.png"; 
    
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