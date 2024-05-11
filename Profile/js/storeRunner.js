
var StoreRunner = {

    collections : [
        {
            header : 'Denim Bag',
            pImg :'Design',
            pPrice: 150,
            pA: 50
        },
        {
            header : 'Skrrr Mazaz\'',
            pImg :'Mazaz',
            pPrice: 100,
            pA: 50
        },
        {
            header : 'Skrrr Jacket\'',
            pImg :'Jacket',
            pPrice: 100,
            pA: 50
        },
        {
            header : 'Baggy Pants\'',
            pImg :'Baggy',
            pPrice: 100,
            pA: 50
        },
        {
            header : 'Denim Bag',
            pImg :'Design',
            pPrice: 150,
            pA: 50
        },
        {
            header : 'Skrrr Mazaz\'',
            pImg :'Mazaz',
            pPrice: 100,
            pA: 50
        },
        {
            header : 'Skrrr Jacket\'',
            pImg :'Jacket',
            pPrice: 100,
            pA: 50
        },
        {
            header : 'Baggy Pants\'',
            pImg :'Baggy',
            pPrice: 100,
            pA: 50
        }

    ],
    generateStoreHTML(storeObj) {
        // var srcc = ;
        var box = document.getElementById("product-list")
        
        box.innerHTML+=`
            <div id="${storeObj.header}">
                <h6>R${storeObj.pPrice}</h6>
                <h5>${storeObj.header}</h5>
                <img src="../Profile/react-store/src/resrc/${storeObj.pImg.toLowerCase()}.jpg" alt="${storeObj.header}"> 
             </div>
         `;
     },
 
 addStoreObjectsToParent() {
         //const scriptTag = document.currentScript;
         //const parentElement = scriptTag.parentElement;
         //var box = document.getElementById("pictures")
         //box.innerHTML = ''
         //if (!parentElement) return;
     
         StoreRunner.collections.forEach(storeObj => {
             //const storeHTML = 
             StoreRunner.generateStoreHTML(storeObj);
             
             //parentElement.insertAdjacentHTML('beforeend', storeHTML);
             //box.innerHTML+=storeHTML;
         });

        /* var item = document.getElementById("yes");
         item.style.visibility="none";*/
     },

     getFiles(dir) {
        var fs = require('fs')
        var files = fs.readdirSync('../Profile/react-gallery/src/resrc/serene/')
        console.log(files);
     }
}