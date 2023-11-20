var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.9111139505, 127.710387908), // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var positions_1 = [
    {
        title: '강원도립화목원', 
        latlng: new kakao.maps.LatLng(37.92264446, 127.725156)
    },
    {
        title: '국립춘천숲체원', 
        latlng: new kakao.maps.LatLng(37.97854798, 127.7707417)
    }
];

var positions_2 = [
    {
        title: '당림 초등학교(봄내길 3코스)',
        latlng: new kakao.maps.LatLng(37.83783517, 127.6081737)
    },
    {
        title: '예현병원(봄내길 3코스)',
        latlng: new kakao.maps.LatLng(37.85129201, 127.6173442)
    },
    {
        title: '석파령(봄내길 3코스)',
        latlng: new kakao.maps.LatLng(37.84791875, 127.6392546)
    },
    {
        title: '덕두원(봄내길 3코스)',
        latlng: new kakao.maps.LatLng(37.860049, 127.659216)
    },
    {
        title: '수레너미(봄내길 3코스)',
        latlng: new kakao.maps.LatLng(37.863356, 127.657438)
    },
    {
        title: '장절공 정보화마을(봄내길 3코스)',
        latlng: new kakao.maps.LatLng(37.89703956, 127.6692207)
    },
    {
        title: '신숭겸묘역(봄내길 3코스)',
        latlng: new kakao.maps.LatLng(37.9032678, 127.6619682)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc_1 = "map_api/images/forest_pin.png"; //제작자: juicy_fish - Flaticon
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