var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.88141792069764, 127.72976998296438 ), // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


var positions = [
    {
        title: '삼악산 호수 케이블카 주차장', 
        latlng: new kakao.maps.LatLng(37.865201, 127.691707)
    },
    {
        title: 'KT&G상상마당 춘천', 
        latlng: new kakao.maps.LatLng(37.873615741289, 127.702131167296)
    },
    {
        title: '소양2교', 
        latlng: new kakao.maps.LatLng(37.89660249307463, 127.72768015842242)
    },
    {
        title: '신매대교',
        latlng: new kakao.maps.LatLng(37.9220734738424, 127.715615642141)
    },
    {
        title: '의암댐',
        latlng: new kakao.maps.LatLng(37.8327747530978, 127.674140900704)
    },
    {
        title: '삼악산 호수 케이블카 주차장',
        latlng: new kakao.maps.LatLng(37.865201, 127.691707)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "map_api/images/riding_pin.png";// 아이콘 제작자: Smashicons - Flaticon
    
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