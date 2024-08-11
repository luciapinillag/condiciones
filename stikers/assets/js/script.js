const buttonBtn = document.querySelector("#button");
const mensage  = document.getElementById('mensage');

buttonBtn.addEventListener("click",()=>{

    const sticker1 = parseInt(document.getElementById('stickers1').value) || 0;
    const sticker2 = parseInt(document.getElementById('stickers2').value) || 0;
    const sticker3 = parseInt(document.getElementById('stickers3').value) || 0;

    const totalStikers = sticker1 + sticker2 + sticker3;

if(totalStikers <= 10){
    mensage.textContent = `Llevas ${totalStikers} stickers.`;

}else{
    mensage.textContent = 'Llevas demasiados stickers.';
}


});