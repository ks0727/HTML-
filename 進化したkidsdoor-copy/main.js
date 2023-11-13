  //スライドショーの実装
  window.addEventListener('load',()=>{
    viewSlide('.visual img',-1);  
  });

  function viewSlide(classname, slideNo = -1){
    let imgArray = document.querySelectorAll(classname);

    if(slideNo >= 0){
      imgArray[slideNo].style.opacity = 0;
    }
    slideNo++;

    if(slideNo >= imgArray.length){
      slideNo = 0;
    }
    imgArray[slideNo].style.opacity = 1;

    setTimeout(function(){
      viewSlide(classname,slideNo);
    },5000); 
  }

//headerのスクロールの実装
const header = document.getElementById('header');
const hH = header.clientHeight;

let pos = 0;
let lastpos = 0;

const onScloll = ()=>{
  if( pos > hH && pos > lastpos){
    header.classList.add('header-unpinned');
  }
  if(pos < lastpos){
    header.classList.remove('header-unpinned');
  }
  lastpos = pos;
};

window.addEventListener('scroll',()=>{
  pos = window.scrollY;
  onScloll();
});

// headerから要素が出てくる実装
const aboutchild = document.getElementById('aboutchild');
const about = document.getElementById('about');
const actcontentchild = document.getElementById('actcontentchild');
const actcontent = document.getElementById('actcontent');

about.addEventListener('mouseover',()=>{
  aboutchild.classList.add('aboutchild-open')
});

about.addEventListener('mouseleave',()=>{
  aboutchild.classList.remove('aboutchild-open');
});

actcontent.addEventListener('mouseover',()=>{
  actcontentchild.classList.add('actcontentchild-open')
});

actcontent.addEventListener('mouseleave',()=>{
  actcontentchild.classList.remove('actcontentchild-open');
});
