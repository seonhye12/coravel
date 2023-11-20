var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.871372757, 127.72096225), // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


var positions = [   
    {
        title: '의암호 스카이워크', 
        latlng: new kakao.maps.LatLng(37.84530385, 127.6777331)
    },
    {
        title: '닭갈비 골목', 
        latlng: new kakao.maps.LatLng(37.87935802, 127.7287547)
    },
    {
        title: '구봉산 카페거리', 
        latlng: new kakao.maps.LatLng(37.90759772, 127.7592902)
    },
    {
        title: '춘천 벽화마을', 
        latlng: new kakao.maps.LatLng(37.87222159, 127.7271043)
    },
    {  
        title: '중도물레길',
        latlng: new kakao.maps.LatLng(37.87082512, 127.6899527)
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