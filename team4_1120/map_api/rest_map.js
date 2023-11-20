var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.88554314, 127.7299357), // 지도의 중심좌표
    level: 7, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


var positions_1 = [
    {
        title: '초빈닭갈비',
        latlng: new kakao.maps.LatLng(37.8662845, 127.7524762)
    },
    {
        title: '소양강닭갈비막국수',
        latlng: new kakao.maps.LatLng(37.8928974, 127.7255538)
    },
    {
        title: '춘천스카이워크닭갈비막국수',
        latlng: new kakao.maps.LatLng(37.88458694, 127.7226632)
    },
    {
        title: '다릿목닭갈비',
        latlng: new kakao.maps.LatLng( 37.8929134, 127.7249201)
    },
    {
        title: '봉수닭갈비',
        latlng: new kakao.maps.LatLng(37.8735113, 127.7434893)
    },
    {
        title: '숯불닭갈비나라',
        latlng: new kakao.maps.LatLng(37.8986817, 127.729166)
    },
    {
        title: '학곡리막국수닭갈비',
        latlng: new kakao.maps.LatLng(37.8503427, 127.7529409)
    }
];

var positions_2 = [
    {   
        title: '올블루파스타',
        latlng: new kakao.maps.LatLng(37.8764759, 127.7545814)
    },
    {   
        title: '이니시파스타',
        latlng: new kakao.maps.LatLng(37.8533799, 127.7459044)
    },
    {   
        title: '진스키친',
        latlng: new kakao.maps.LatLng(37.883295, 127.7367516)
    },
    {   
        title: '리버앤드',
        latlng: new kakao.maps.LatLng(37.9105787, 127.748219)
    },
    {   
        title: '어라운드키친',
        latlng: new kakao.maps.LatLng(37.8818919, 127.762183)
    }
    
];


// 마커 이미지의 이미지 주소입니다
var imageSrc_1 = "map_api/images/galbee_pin.png"; 
var imageSrc_2 = "map_api/images/food_pin.png";
    
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