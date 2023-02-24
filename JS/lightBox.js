const img = document.querySelectorAll('.container_game-main-right-bot-item img');
let length = img.length;
img.forEach(function(item){
    item.addEventListener('click', function(e){
        const src = e.target.getAttribute('src');
        const html = `
        <div class="lightbox">
            <div class="lightbox-content">
                <i class="fa fa-angle-left lightbox-preve"></i>
                <img class="lightBox-image" src="${src}" alt="">
                <i class="fa fa-angle-right lightbox-next"></i>
            </div>
        </div>
        `
        document.body.insertAdjacentHTML("beforeend", html)
    });
});
let i = 0;
document.body.addEventListener('click', function(e){
    const currentSrc = document.querySelector(".lightBox-image");
    let srcImg = "";
    if(e.target.matches(".lightbox")){
        e.target.parentNode.removeChild(e.target);
    }
    else if(e.target.matches(".lightbox-next")){
        srcImg = currentSrc.getAttribute('src');
        index = [...img].findIndex((item) => item.getAttribute('src') === srcImg)
        index += 1;
        if(index > length - 1){
            index = 0;
        }
        const nextSrc = [...img][index].getAttribute('src');
        currentSrc.setAttribute('src', nextSrc);
    }
    else if(e.target.matches(".lightbox-preve")){
        srcImg = currentSrc.getAttribute('src');
        index = [...img].findIndex((item) => item.getAttribute('src') === srcImg)
        index -= 1;
        console.log(index);
        if(index < 0){
            index = length - 1;
        }
        const nextSrc = [...img][index].getAttribute('src');
        currentSrc.setAttribute('src', nextSrc);
    }
})