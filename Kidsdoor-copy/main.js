
//スライドショーの実装

window.addEventListener("load",function(){
  viewSlide('.visual img');
});

function viewSlide(className, slideNo = -1){
  let imgArray = document.querySelectorAll(className);
  // console.log(imgArray);

  if(slideNo >= 0){
    imgArray[slideNo].style.opacity = 0;
  }
  slideNo++;
  if( slideNo >= imgArray.length){
    slideNo = 0;
  }
  imgArray[slideNo].style.opacity = 1;
  setTimeout(function(){viewSlide(className,slideNo);},5000);
};

//headerのスクロールの実装
const header = document.getElementById('header');
const hH = header.clientHeight;
let pos = 0;
let lastpos = 0;
const onScroll = ()=>{
  if(pos > hH && pos > lastpos){
    header.classList.add('header-unpinned');
  }
  
  if( pos < lastpos){
    header.classList.remove('header-unpinned')
  }

  lastpos = pos;
};

window.addEventListener("scroll",()=>{
  pos = window.scrollY;
  console.log("posの値:"+pos);
  console.log("lastposの値:"+lastpos);
  onScroll();
});

//headerの動きの実装
const about = document.getElementById('about');
const aboutDetail = document.getElementById('aboutDetail');

about.addEventListener('mouseenter',e=>{
  aboutDetail.classList.add('aboutDetail-openned');
});

about.addEventListener('mouseleave',e=>{
  aboutDetail.classList.remove('aboutDetail-openned');
});
