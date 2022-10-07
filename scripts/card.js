{/* <li>
                        <figure>
                            <img src="./assets/img/1.jpg" alt="Imagem album Scalene">
                            <figcaption>Scalene 2017</figcaption>
                        </figure>
                        <h3>Magnetite</h3>
                        <p>R$ 70.00</p>
                        <button>Comprar</button>
                    </li> */}

const ul = document.querySelector('.cardUl')
const remove = document.querySelector("#Remover")

function createCard(array){
    for(let i = 0; i < array.length; i++){
        const li = document.createElement('li');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figCaption = document.createElement('figcaption')
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const btnCard = document.createElement('button');
        const btnParg = document.createElement('div')
        
        // if(array === []){
        //     remove.classList.add('noneDisplay')
    
        // }
        li.classList.add('cardReder')
        figCaption.innerText = `${array[i].band}  ${array[i].year}`
        img.src = array[i].img
        img.alt = array[i].band
        h3.innerText = array[i].band
        p.innerText = `R$ ${array[i].price},00`
        btnCard.innerText = 'Comprar'
        btnParg.classList.add('btnParg')

        figure.append(img, figCaption)
        btnParg.append(p, btnCard)
        li.append(figure, h3, btnParg)
        ul.append(li);
    }
    return ul
}

createCard(products);
