//lottie animation
const AnimContainer=document.querySelector('.svg');

const anim=bodymovin.loadAnimation({
    wrapper:AnimContainer,
    animType:'svg',
    loop:true,
    autoplay:true,
    path:"https://assets6.lottiefiles.com/packages/lf20_80ahust1.json"
});