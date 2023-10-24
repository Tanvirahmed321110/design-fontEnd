// const allProps = document.querySelectorAll('props')
// document.addEventListener('click',function(){
//     allProps.style.display='none'
// })



document.querySelector('.app').addEventListener('click',function(){
    const language = document.querySelector('.app-drop-down');
    language.style.display = 'block'
    console.log(language)
    alert('clik')
})




// slider 
const allImg = [
    'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
    'https://imgclothing.com.co/cdn/shop/files/Logo_IMG_invertido-02_2551x.png?v=1668785641',
    'https://www.state.gov/wp-content/uploads/2023/04/shutterstock_1263201358-2280x1282.jpg'
]
let index = 0;
const sliderImg = document.getElementById('slider-img');
function sliderF (){
    index++;
    if(index>=allImg.length){
        index = 0
        sliderImg.src = allImg[index]
    }
    else{
        sliderImg.src = allImg[index]
    }
    setTimeout('sliderF()',3000)
}

window.onload = sliderF()


// function sliderNext (){
//     document.getElementById('btn-slider-next').addEventListener('click', function(){
//         const sliderImg = document.getElementById('slider-img');
//         index++
//         if(index >= allImg.length){
//             index = 0
//         }
//         sliderImg.src = allImg[index];
//     });
// }


// function sliderPre(){
//     document.getElementById('btn-slider-pre').addEventListener('click',function(){
//         index--
//         if(index<=0){
//             index = allImg.length-1
//             sliderImg.src = allImg[index]
//         }
//         sliderImg.src = allImg[index]
//         console.log(index)
//     })
// }
// sliderPre()
// sliderNext()


function preOrNext (inOrDe,btnId){
    document.getElementById(btnId).addEventListener('click', function(){
        const sliderImg = document.getElementById('slider-img');
        
        if(inOrDe){
            index++
            if(index >= allImg.length){
                index = 0
            }
            else{
                sliderImg.src = allImg[index];
            }
        }
        
        else{
            index --;
            if(index <0){
                index = allImg.length -1;
                sliderImg.src = allImg[index]
            }
            else{
                sliderImg.src = allImg[index]
            }
        }
    });
}
preOrNext(true,'btn-slider-next')
preOrNext(false,'btn-slider-pre')