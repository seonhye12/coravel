var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.88554314, 127.7299357), // 지도의 중심좌표
    level: 9, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성한다 


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


var positions_1 = [
    {
        title: '발바닥 애견카페',
        latlng: new kakao.maps.LatLng(37.86076426, 127.762483)
    },
    {
        title: '도그스테이블',
        latlng: new kakao.maps.LatLng(37.84389915, 127.745403)
    },
    {
        title: '강아지숲', 
        latlng: new kakao.maps.LatLng(37.73643502, 127.6620202)
    },
    {
        title: '킹카누 나루터', 
        latlng: new kakao.maps.LatLng(37.85579048, 127.6853596)
    },
    {
        title: '공지천',
        latlng: new kakao.maps.LatLng(37.88072017, 127.7121879)
    },
    {
        title: '남이섬',
        latlng: new kakao.maps.LatLng(37.79012495, 127.526129)
    },
    {
        title: '퍼피쿵',
        latlng: new kakao.maps.LatLng(37.8567333, 127.720274)
    },
    {
        title: '하중도생태공원',
        latlng: new kakao.maps.LatLng(37.8784202, 127.689945)
    },
    {
        title: '히포코코 애견카페',
        latlng: new kakao.maps.LatLng(37.87881365, 127.727214)
    }
];

var positions_2 = [
    {   
        title: '춘천 통나무집 닭갈비',
        latlng: new kakao.maps.LatLng(37.93311389, 127.7932958)
    },
    {
        title: '카페케빈', 
        latlng: new kakao.maps.LatLng(37.7473361, 127.6301876)
    },
    {
        title: '마론과자점', 
        latlng: new kakao.maps.LatLng(37.88920101, 127.7419823)
    },
    {
        title: '감자밭', 
        latlng: new kakao.maps.LatLng(37.92958863, 127.784517)
    },
    {
        title: '강원경찰박물관', 
        latlng: new kakao.maps.LatLng(37.92530023, 127.749932)
    },
    {
        title: '강원도 산림 박물관', 
        latlng: new kakao.maps.LatLng(37.92264687, 127.72516)
    },
    {
        title: '강촌꿈에그린', 
        latlng: new kakao.maps.LatLng(37.78745102, 127.640485)
    },
    {   
        title: '권진규미술관',
        latlng: new kakao.maps.LatLng(37.92005546, 127.805256)
    },
    {
        title: '남양펜션',
        latlng: new kakao.maps.LatLng(37.96773421, 127.581907)	
    },
    {
        title: '송암레포츠타운',
        latlng: new kakao.maps.LatLng(37.85496429, 127.685768)
    },
    {
        title: '애니메이션박물관',
        latlng: new kakao.maps.LatLng(37.89302024, 127.691924)
    },
    {
        title: '어반그린 카페',
        latlng: new kakao.maps.LatLng(37.88437077, 127.683179)
    },
    {
        title: '의암류인석기념관',
        latlng: new kakao.maps.LatLng(37.74408492, 127.570654)
    },
    {
        title: '청평사',
        latlng: new kakao.maps.LatLng(37.98607131, 127.808452)
    },
    {
        title: '춘천미술관',
        latlng: new kakao.maps.LatLng(37.88237413, 127.731374)
    },
    {
        title: '카페 멜버른',
        latlng: new kakao.maps.LatLng(37.86638945, 127.729704)
    },
    {
        title: '해원의 작은집',
        latlng: new kakao.maps.LatLng(37.86029974, 127.789709)
    },
    {
        title: 'KT&G 상상마당 춘천 아트센터',
        latlng: new kakao.maps.LatLng(37.87361778, 127.702092)
    }
];


// 마커 이미지의 이미지 주소입니다
var imageSrc_1 = "map_api/images/pet2_pin.png"; // 제작자: Smashicons - Flaticon
var imageSrc_2 = "map_api/images/pin_pointer.png"; // 제작자: Smashicons - Flaticon
    
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