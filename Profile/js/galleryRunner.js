var GalleryRunner = {

    collections : [
        {
            id:1,
            header:'Blooming',
            //cover:blooming,
            dir: '../Profile/react-gallery/src/resrc/blooming/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'] //,'7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:2,
            header:'Bhosso',
            //cover:bhosso,
            dir: '../Profile/react-gallery/src/resrc/bhosso/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg']
        },
        {
            id:3,
            header:'Brown',
            //cover:brown,
            dir: '../Profile/react-gallery/src/resrc/brown/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','19.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:4,
            header:'eJozi',
            //cover:ejozi,
            dir: '../Profile/react-gallery/src/resrc/ejozi/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:5,
            header:'Primrose',
            //cover:primrose,
            dir: '../Profile/react-gallery/src/resrc/primrose/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
         {
            id:6,
            header:'eGumbini',
            //cover:egumbini,
            dir: '../Profile/react-gallery/src/resrc/egumbini/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:7,
            header:'Melanin',
            //cover:melanin,
            dir: '../Profile/react-gallery/src/resrc/melanin/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:8,
            header:'Afrobeaut',
            //cover:afrobeaut,
            dir: '../Profile/react-gallery/src/resrc/afrobeaut/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg']
        },
        {
            id:9,
            header:'Goldie',
            //cover:goldie,
            dir: '../Profile/react-gallery/src/resrc/goldie/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','20.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg']
        },
        {
            id:11,
            header:'Serene',
            //cover:serene,
            dir: '../Profile/react-gallery/src/resrc/serene/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg']
        }
        ,
        {
            id:12,
            header:'Anti',
            //cover:anti,
            dir: '../Profile/react-gallery/src/resrc/anti/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg']
        }
       ,
        {
            id:13,
            header:'Dangerous',
            //cover:dangerous,
            dir: '../Profile/react-gallery/src/resrc/dangerous/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg']
        }
        ,
        {
            id:14,
            header:'Shoot 3',
            //cover:shoot3,
            dir: '../Profile/react-gallery/src/resrc/shoot 3/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg']
        },
        {
            id:15,
            header:'Nippy',
            //cover:nippy,
            dir: '../Profile/react-gallery/src/resrc/nippy/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg']
        },
        {
            id:16,
            header:'Muse',
            //cover:muse,
            dir: '../Profile/react-gallery/src/resrc/muse/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg']
        }
    ],
    
    viewImages(images){
        
        var box = document.getElementById("pictures")
        box.innerHTML = ''
        var pics = GalleryRunner.collections.filter(function (el) {
                return el.header === images;
              });
    
              
             /*pics.at(0).photos .photos.
             
             console.log(stringing.join(''))
             */
              var stringing = pics[0].photos.map((img)=> {
                    return `<img src='${pics[0].dir}${img}' alt = 'An image from the ${pics[0].dir}${img} shoot'/>`
              });
    
              box.innerHTML = stringing.join('');
              box.style.zIndex ='10000';
              box.style.visibility = 'visible';
              //box.style.transition= '2.5s';
        },
    
    clearImages(){
    
        var box = document.getElementById("pictures")
        box.style.visibility='hidden';
        box.innerHTML = '';
       },
    
    
    /*  <div id="ejozi" onclick="viewImages('eJozi')" ondblclick="clearImages()">
            <img src="../Profile/react-gallery/src/resrc/ejozi.jpg" alt="">
            <h3>eJozi</h3>
        </div>
       */
    
    
    generateGalleryHTML(galleryObj) {
           // var srcc = ;
           var box = document.getElementById("gal-nav")
           
           box.innerHTML+=`
                <div id="${galleryObj.header}" onclick="GalleryRunner.viewImages('${galleryObj.header}')" ondblclick="GalleryRunner.clearImages()">
                    <img src="../Profile/react-gallery/src/resrc/${galleryObj.header.toLowerCase()}.jpg" alt="${galleryObj.header}">
                    <h3>${galleryObj.header}</h3>
                </div>
            `;
        },
    
    addGalleryObjectsToParent() {
            //const scriptTag = document.currentScript;
            //const parentElement = scriptTag.parentElement;
            //var box = document.getElementById("pictures")
            //box.innerHTML = ''
            //if (!parentElement) return;
        
            GalleryRunner.collections.forEach(galleryObj => {
                //const galleryHTML = 
                GalleryRunner.generateGalleryHTML(galleryObj);
                
                //parentElement.insertAdjacentHTML('beforeend', galleryHTML);
                //box.innerHTML+=galleryHTML;
            });

           /* var item = document.getElementById("yes");
            item.style.visibility="none";*/
        }


}
