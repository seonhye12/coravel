var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.96069758070245, 127.75149122129433), // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


var positions_1 = [
    {
        title: '봄봄캠핑', 
        latlng: new kakao.maps.LatLng(37.97994178, 127.6206816)
    },
    {
        title: '소양호 오지캠핑', 
        latlng: new kakao.maps.LatLng(37.89967768, 127.8887974)
    }
];
var positions_2 = [
    {
        title: '소양호 유람선 매표소(봄내길 5코스)', 
        latlng: new kakao.maps.LatLng(37.95816023, 127.8137729)
    },
    {
        title: '품걸리 선착장(봄내길 5코스)',
        latlng: new kakao.maps.LatLng(37.90029777798123, 127.88404931855267)
    },
    {
        title: '갈골(봄내길 5코스)',
        latlng: new kakao.maps.LatLng(37.91679208, 127.928921)
    },
    {
        title: '물로리 선착장(봄내길 5코스)',
        latlng: new kakao.maps.LatLng(37.913962526077135, 127.91729308840124)
    }
];


// 마커 이미지의 이미지 주소입니다
var imageSrc_1 = "map_api/images/camp_pin.png"; 
var imageSrc_2 = "map_api/images/walking_pin.png"; 
    
for (var i = 0; i < positions_1.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(35, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc_1, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions_1[i].latlng, // 마커를 표시할 위치
        title : positions_1[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}

for (var i = 0; i < positions_2.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(35, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc_2, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions_2[i].latlng, // 마커를 표시할 위치
        title : positions_2[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}