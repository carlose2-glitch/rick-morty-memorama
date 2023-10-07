const contain = document.querySelector('main');//contenedor de las cartas
const frontCArd = 'https://rickandmortyapi.com/api/character/avatar/276.jpeg';
let arrImage = [];
(async()=>{//traer los datos de la api
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json()
        saveImages(data.results);
    
    }catch(Error){

        console.log(Error)

    }
})();

const saveImages = (data) =>{//funcion de guardar las imagenes en un arreglo de 16 cartas

    let containImage = [];

    for(let i = 0; i < 8; i++){
        let contador = i;
        
        while(contador === i){
            containImage.push(data[i].image);
            contador++;
        }
        containImage.push(data[i].image);
    }
    
    containImage.sort(()=>Math.random() - 0.5);

    primtImage(containImage);
}

const primtImage = (images) =>{//funcion de imprimir las cartas en pantalla 

    images.forEach(element => {

        contain.innerHTML += ` 
        <div class="card">
        
        <img class="front" src="${frontCArd}" alt="">
        
        <img class="back" src="${element}" alt="">
        </div>`;
    });

}
contain.addEventListener('click', e =>{
    
    if(e.target.src === frontCArd){
        arrImage.push(e.target.parentElement);
        validMove(e.target.parentElement);
    }
})

const validMove = (card) => {

    if(arrImage.length <= 2){

        if(card.style.transform === '' || card.style.transform === 'rotateY(0deg)'){
            card.style.transform = 'rotateY(180deg)';
        }
        
        if(arrImage.length === 2){
            
            findCard() 
    }
    }
    
   
}
const findCard = () =>{

    if(arrImage[0].children[1].src === arrImage[1].children[1].src){
        console.log('verdadero');
        arrImage = [];

    }else{
        console.log('falso');
            setTimeout(()=>{
                 
                 arrImage[0].style.transform = 'rotateY(0deg)';
                 arrImage[1].style.transform = 'rotateY(0deg)';
                 arrImage = [];

            },1000)
        }
}