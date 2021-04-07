let images=[1,2,3,4,5];
let currImage = 1;

function slideImages(next){
    // document.getElementById('currSlot').style.backgroundImage = 'url(public/images/'+images[currImage]+'.jpeg)'
    // document.getElementById('prevSlot').style.backgroundImage = 'url(public/images/'+images[currImage-1!==0?currImage-1:images.length-1]+'.jpeg)'
    // document.getElementById('prevSlot').style.backgroundImage = 'url(public/images/'+images[currImage+1!==images.length?currImage+1:0]+'.jpeg)'
    if(next){
        document.getElementById('currSlot').style.transform = 'translateX(-100%)'
        // document.getElementById('prevSlot').style.transform = 
        document.getElementById('nextSlot').style.transform = 'translateX(-100%)'
    }
    else{
        document.getElementById('currSlot').style.transform = 'translateX(100%)'
        document.getElementById('prevSlot').style.transform =  'translateX(100%)'
        // document.getElementById('nextSlot').style.transform = 
    }
}

function prev(){
    // slideImages(false)
    if(currImage === 1)
        currImage = images.length -1
    else    
        currImage--

    let carouselborder = document.querySelector('.imageContainer')
    let x = document.createElement('img')
    x.classList.add('myImage')
    x.style.backgroundImage =`url('public/images/${currImage}.jpeg')`
    // <div class="myImage" style="background-image: url('public/images/1.jpeg');"></div>
    carouselborder.appendChild(x)
    carouselborder.style.transform = `translateX(${-500}px)`
    // let size = carouselborder.clientWidth
    // carouselborder.style.transform = `translateX(${-500 * currImage}px)`
    
}

// function next(){
//     // slideImages(true)
//     currImage = (currImage + 1) % images.length
//     let carouselborder = document.querySelector('.imageContainer')
//     // let size = carouselborder.clientWidth
//     carouselborder.style.transform = `translateX(${-500 * currImage}px)`
// }

let xContainer=document.querySelector('.imageContainer')
xContainer.addEventListener('transitionend',()=>{
    console.log('transitionEND')
    let px = document.getElementById('imageBorder');
    px.style.transition = 'none'
    px.style.transform = 'translateX(0)'
    px.removeChild(px.childNodes[0])
    // setTimeout(()=>{
        
    // },250)

    setTimeout(() => {
        px.style.transition = 'transform 1s linear'
    },50)
    
    console.log('In ST imageCOntainer',px.childNodes)
    
    console.log('imageCOntainer',px.childNodes)
})



// document.addEventListener('DOMContentLoaded',()=>{
//     document.getElementById('currSlot').style.backgroundImage = 'url(public/images/'+images[currImage]+'.jpeg)'
//     document.getElementById('prevSlot').style.backgroundImage = 'url(public/images/'+images[currImage-1!==0?currImage-1:images.length-1]+'.jpeg)'
//     document.getElementById('nextSlot').style.backgroundImage = 'url(public/images/'+images[currImage+1!==images.length?currImage+1:0]+'.jpeg)'
// })