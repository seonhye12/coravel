var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.884700804, 127.69647340), // 지도의 중심좌표
    level: 9, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


var positions = [
    {
        title: '집다리골 자연 휴양림', 
        latlng: new kakao.maps.LatLng(37.9779363366603, 127.580120875895)
    },
    {
        title: '하중도 생태공원', 
        latlng: new kakao.maps.LatLng(37.8784202047101, 127.689944975259)
    },
    {
        title: '남이섬', 
        latlng: new kakao.maps.LatLng(37.7901249506709, 127.526128703219)
    },
    {
        title: '힐앤힐 카페', 
        latlng: new kakao.maps.LatLng(37.8199845316442, 127.696351386758)
    },
    {   
        title: '카페 옥산',
        latlng: new kakao.maps.LatLng(37.925744807534, 127.720976812824)
    }
];



// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
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