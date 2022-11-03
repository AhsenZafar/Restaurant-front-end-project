import { menuArray  } from './data.js'
const itemContainer = document.getElementById('menu')


function getMenu(){
    let menu =''
    menuArray.forEach(function(item){
        menu +=
        
        `<div class ='item'>
            <div class = 'left-container'>
                <p class ='emoji'>{${item.emoji}}</p>
                <div class ='description'>
                    <h3>Pizza</h3>
                    <p>ingredients</p>
                    <p>price</p>
                </div>
            </div>
            <div class ='right-container'>
                <button class = 'add-item' data-itemNo="0">+</button>
            </div>
            </div>
            
                

    
        </div>`


   
    })
    itemContainer.innerHTML = menu
}
getMenu()