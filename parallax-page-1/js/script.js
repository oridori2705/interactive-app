let scrollNum = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImage");//가장 맨앞에있는 이미지
let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("scroll", () => {
    //스크롤이벤트에서 필요한 요소
    scrollNum = window.scrollY;
    //이미지 4개만 translate를 부여했다.
    //그림으 총 갯수에서 각 그림의 index값을 뺀 값에 2를 곱한 값을 나눠서
    //이미지 각각 다른 속도의 translate를준다.
    //이때 제일 첫번째있는 그림은 거의 안움직인다.
    imageAll.forEach((item, index) => {
        if (index < 4) {
            item.style.transform = `translateY(${
                -scrollNum / (2 * (totalNum - index))
            }px)`;
        }
    });
});

window.addEventListener("mousemove", (e) => {
    x = e.pageX - window.innerWidth / 2; // 나누기 2를 통해 -200 ~ 200 이런식으로 됨 정가운데의 좌표가 (0,0)
});

const loop = () => {
    /*마우스 이벤트를 위해 targetX선언 */
    targetX += (x - targetX) * speed;

    //scale을 한 이유는 현재 이미지가 움직이게되면 양쪽끝에가 짤리게 된다.
    //그래서 크기를 키워야한다.

    /*이미지를 봤을 때 맨앞에서 2번째 3번째 이미지는 x좌표로도 마우스가 움직이면 같이 움직이는 기능을 넣어여한다.*/
    /* translate x값과 y값을 각각 다르게 로직을 짜서 넣었다. */
    /*이렇게 따로 안넣으면 위에서 스크롤이벤트를 하다가 x좌표가 움직였을때 끊김현상이나타남 */
    imageAll[4].style.transform = `scale(1.05) translate(${-targetX / 200}px, ${
        -scrollNum / (2 * (totalNum - 4))
    }px)`;
    imageAll[5].style.transform = `scale(1.05) translate(${-targetX / 100}px,${
        -scrollNum / (2 * (totalNum - 5))
    }px )`;
    /*제일 맨 앞에있는이미지는 마우스이벤트에서 가장많이 움직이고, translateY는 주지 않았다.  */
    subPageImage.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;
    //부드럽게 움직이게하는 requestAnimationFrame 사용 
    window.requestAnimationFrame(loop);
};
loop();
