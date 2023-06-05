let scrollNum = 0;
const depthWrap  = document.querySelector('.depthWrap');
const progressbar = document.querySelector(".bar");
const submarine=document.querySelector(".submarine");
const octopus=document.querySelector(".octopus");
let documentheight= 0;
let per=0;

window.addEventListener('scroll', ()=>{
    scrollNum=window.scrollY;
    documentheight= document.body.scrollHeight-window.innerHeight

    per= percent(scrollNum,documentheight);
    /*숫자에 span을 따로 잡아서 그 숫자만 바뀌게 한다(숫자가 커질 때마다 옆에 단위가 움직여서) */
    depthWrap.querySelector("span").innerText = scrollNum.toFixed(0);
    progressbar.style.width=per;

    submarine.style.transform=`translateX(${per}%)`/*per에서 %를 붙여줬으므로 안붙여줘야함 */
    octopus.style.transform=`translateY(${-per/2}%)`/*옥토퍼스가 서서히 올라옴 */
})

const percent=(num,totalNum)=>{
    return ((num/totalNum)*100).toFixed(0);
}


