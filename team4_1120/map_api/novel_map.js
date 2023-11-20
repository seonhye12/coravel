var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.85998802248452, 127.67954774615521), // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var positions_1 = [
    {
        title: '김유정 문학촌', 
        latlng: new kakao.maps.LatLng(37.81830175, 127.7177391)
    },
    {
        title: '춘천문학공원', 
        latlng: new kakao.maps.LatLng(37.90094634, 127.6968883)
    }
];

var positions_2 = [
    {
        title: '구곡폭포', 
        latlng: new kakao.maps.LatLng(37.79396481, 127.6092062)
    },
    {
        title: '삼악산 호수 케이블카', 
        latlng: new kakao.maps.LatLng(37.86445399, 127.6913647)
    },
    {   //봄내길 2코스
        title: '구곡폭포 주차장',
        latlng: new kakao.maps.LatLng(37.79773906, 127.6166173)
    },
    {
        title: '문배마을',
        latlng: new kakao.maps.LatLng(37.79094429, 127.6039201)
    },
    {
        title: '봉화산 갈림길',
        latlng: new kakao.maps.LatLng(37.781008, 127.610987)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc_1 = "map_api/images/novel_pin.png";// 제작자: Yogi Aprelliyanto - Flaticon
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