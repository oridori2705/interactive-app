let scrollNum = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPage = document.querySelectorAll(".subPage");

window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    /* translate3d로 x값 y값 z값을 지정해줄 수 있다.*/
    /*perspective(400px) 이 값을넣어줘야 3D효과가 나오게 된다. */
    /*z값을 +로 주면 점점 깊이가 확대되는 것이다. */

    if (scrollNum < 2500*subPage.length) { //scrollNum의 값을 제한하면 z가 들어가는 깊이를 제한할 수 있다.
        imageAll.forEach((item, index) => {
            //perspective를 주면 z값사용가능
            //perspective의 값이 낮을수록 원근효과가 높아진다. -> 요소가 시야에서 얼마나 멀리 있어야 하는지 500px만큼 멀리있는거다
            item.style.transform = `perspective(500px) translate3d(0,0,${
                scrollNum / (3 * (totalNum - index))
            }px)`;
        });
    }
});
