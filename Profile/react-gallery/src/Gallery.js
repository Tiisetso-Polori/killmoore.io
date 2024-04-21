import React ,{useState} from 'react'
import './gallery.css'
//import Images from './Images'

import ejozi from './resrc/ejozi.jpg'
//import ejoziDir from './resrc/ejozi/'
import bhosso from './resrc/bhosso.jpg'
//import bhossoDIr from './resrc/bhosso/'
import brown from './resrc/brown.jpg'
//import brownDir from './resrc/brown/'
import melanin from './resrc/melanin.jpg'
//import melaninDir from './resrc/melanin/'
import primrose from './resrc/primrose.jpg'
//import primroseDir from './resrc/primrose/'
import blooming from './resrc/blooming.jpg'
//import bloomingDIr from './resrc/blooming/'
import egumbini from './resrc/egumbini.jpg'
//import egumbiniDir from './resrc/egumbini/'
import afrobeaut from './resrc/afrobeaut.jpg'
import goldie from './resrc/goldie.jpg'
import serene from './resrc/serene.jpg'
import anti from './resrc/anti.jpg'
import dangerous from './resrc/dangerous.jpg'
import shoot3 from './resrc/shoot3.jpg'
import muse from  './resrc/muse.jpg'
//import nippy from './resrc/nippy.jpg'


/*const Gallery= () => {
    
    /*let data =[
        {
            id:1,
            imgSrc:img1
        },
        {
            id:2,
            imgSrc:img2
        },
        {
            id:3,
            imgSrc:img3
        },
        {
            id:4,
            imgSrc:img4
        },
        {
            id:5,
            imgSrc:img5
        },
        {
            id:6,
            imgSrc:img6
        }
    ]*/

    let collections = [
        {
            id:1,
            header:'Blooming',
            cover:blooming,
            dir: '../Profile/react-gallery/src/resrc/blooming/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'] //,'7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:2,
            header:'Bhosso',
            cover:bhosso,
            dir: '../Profile/react-gallery/src/resrc/bhosso/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg']
        },
        {
            id:3,
            header:'Brown',
            cover:brown,
            dir: '../Profile/react-gallery/src/resrc/brown/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','19.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:4,
            header:'eJozi',
            cover:ejozi,
            dir: '../Profile/react-gallery/src/resrc/ejozi/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:5,
            header:'Primrose',
            cover:primrose,
            dir: '../Profile/react-gallery/src/resrc/primrose/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
         {
            id:6,
            header:'eGumbini',
            cover:egumbini,
            dir: '../Profile/react-gallery/src/resrc/egumbini/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:7,
            header:'Melanin',
            cover:melanin,
            dir: '../Profile/react-gallery/src/resrc/melanin/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:8,
            header:'Afrobeaut',
            cover:afrobeaut,
            dir: '../Profile/react-gallery/src/resrc/afrobeaut/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg']
        },
        {
            id:9,
            header:'Goldie',
            cover:goldie,
            dir: '../Profile/react-gallery/src/resrc/goldie/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','20.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg']
        },
        {
            id:11,
            header:'Serene',
            cover:serene,
            dir: '../Profile/react-gallery/src/resrc/serene/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg']
        }
        ,
        {
            id:12,
            header:'Anti',
            cover:anti,
            dir: '../Profile/react-gallery/src/resrc/anti/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg']
        }
       ,
        {
            id:13,
            header:'Dangerous',
            cover:dangerous,
            dir: '../Profile/react-gallery/src/resrc/dangerous/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg']
        }
        ,
        {
            id:14,
            header:'Shoot 3',
            cover:shoot3,
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
            cover:muse,
            dir: '../Profile/react-gallery/src/resrc/muse/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg']
        }
    ]
    
    /*
        <div id='collection-cont'>
            {
            /*
                data.map((item, index)=>{
                    return(
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} alt="" style={{width:'100%'}}/>
                        </div>
                    )
                })
            
            collections.map((item, index) =>{
                return(                    
                        <div id='collection' key={index} onClick={viewImages(item.header)}>
                            <h1>{item.header}</h1> 
                                <img src={item.cover} alt={item.header} style={{width:'100%'}} title='Gallery Collection Item'/>
                        </div>
                )  
            })
            }
        </div>
}*/

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewing: 'main',
            screen: collections.map((item, index) => (
                <div key={index} onClick={() => this.toggleImages(item.header)} id='collection'>
                    <h1>{item.header}</h1>
                    <img src={item.cover} alt={item.header} style={{ width: '100%' }} title='Gallery Collection Item' />
                </div>
            ))
        };
    }

    toggleImages = (collection) => {
        this.setState({
            viewing: collection,
            screen: collections.filter(item => item.header === collection)
        });
    };

    render() {
        if (this.state.viewing === 'main') {
            return (
                <div>
                    <div id='collection-cont'>
                        {this.state.screen}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={() => this.toggleImages('main')}>Go Back</button>
                    <div>
                        {console.log(this.state.screen)}
                    </div>
                </div>
            );
        }
    }
}

export default Gallery;
