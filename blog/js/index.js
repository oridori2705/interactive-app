const header = document.querySelector("header");
const progressBar = document.querySelector(".bar");
const coverTitle = document.querySelector(".coverTitle");
const coverWrap = document.querySelector(".coverWrap");
const dimd = coverWrap.querySelector(".dimd");
const contWrap = document.querySelector(".contWrap");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;
const coverHeight = window.innerHeight;//창의 레이아웃 뷰포트 높이를 픽셀 단위로 나타내는 정수 값을 저장한다.

coverWrap.style.height = coverHeight + "px"; //페이지가 로드됐을 때 커버이미지에 레이아웃 뷰포트 높이로 준다. 
contWrap.style.marginTop = coverHeight + "px";/*페이지가 로드됐을 때 레이아웃 뷰포트 높이만큼의 px를 margin-top으로 설정한다.*/

window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;//스크롤 값
    //스크롤값이 오차없이 정확하게 하기위한 documentheight
    //document.body.scrollheight는 margin값을 가져오지 못한다. -> 퍼센트를 구할때 마진은 빼고 나와서 100%를 넘게됨
    //그래서 레이아웃 뷰포트 높이를 더햇음 (coverHeight)
    documentHeight =
        document.body.scrollHeight + coverHeight - window.innerHeight;

    per = percent(scrollNum, documentHeight);
    progressBar.style.width = per + "%";
    //만약 스크롤값이 일정높이 넘어가면 헤더에 fixed스타일을 준다.
    //이미지 내려가면 숨겨졌던 헤더가 다시 뜨도록
    if (scrollNum >= coverHeight) {
        header.classList.add("fixed");//헤더를 absoulte에서 fixed로 위에 고정시킴
    } else {
        //화면에서 헤더,타이틀 영역이 보일때
        header.classList.remove("fixed");//다시 absoulte로 맨위에 붙음

        //제목이 스크롤이 내려갈 때 점점올라감
        // -scrollNum에 마이너스를 해줘야 됨 아니면 같이 내려감
        coverTitle.style.top = -scrollNum / 5 + "px";

        //coverWrap클래스에 background의 image로 들어가있음
        //backgroundPosition : 배경 이미지의 위치를 정하는 속성입니다.
        // background-position: x-position y-position | initial | inherit
        //가로 위치는 그대로 두고 y값만 변경한다.
        coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;

        /*만약 헤더 영역이 보일때 검은색이였던 영역을 서서히 투명도를 올려서 커버이미지가 보이게 한다.*/
        dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1600})`;
    }
});

const percent = (num, totalNum) => {
    return ((num / totalNum) * 100).toFixed(0);
};
