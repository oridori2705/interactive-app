let x = 0;
let targetX = 0;
const speed = 0.1;

//img태그를 가져옴
const contentAll = document.querySelectorAll(".contWrap img");
const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

window.addEventListener("mousemove", (event) => {
    //원래 화면 x좌표가 0~500 이였는데
    //화면정가운데를 [0,0] 좌표로 만들고 오른쪽으로가면 +250 왼쪽으로 가면 -250 이런식으로 되게끔함
    x = event.pageX - window.innerWidth / 2; 
});

const loop = () => {
    targetX += (x - targetX) * speed;
    //translateX말고 rotateX로도 가능함 rotateX는 단위는 deg => 더 입체적으로 돌아감
    //targetX를 +로주면 마우스와 같은 방향으로
    //targetX를 -로주면 마우스와 반대방향으로
    //targetX를 나누는 값에따라 움직이는 범위가 달라짐
    shadow.style.transform = `translateX(${targetX / 35}px)`; 
    date.style.transform = `translateX(${targetX / 20}px)`;
    human.style.transform = `translateX(${-targetX / 20}px)`;
    textImg.style.transform = `translateX(${-targetX / 10}px)`;
    window.requestAnimationFrame(loop);
};
loop();
