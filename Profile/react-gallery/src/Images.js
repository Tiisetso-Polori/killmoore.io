import React from "react";

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

    let collections = [
        {
            id:1,
            header:'Blooming',
            cover:blooming,
            dir: './resrc/blooming/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'] //,'7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:2,
            header:'Bhosso',
            cover:bhosso,
            dir: './resrc/bhosso/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:3,
            header:'Brown',
            cover:brown,
            dir: './resrc/brown/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:4,
            header:'eJozi',
            cover:ejozi,
            dir: './resrc/ejozi/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:5,
            header:'Primrose',
            cover:primrose,
            dir: './resrc/primrose/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:6,
            header:'eGumbini',
            cover:egumbini,
            dir: './resrc/egumbini/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id:7,
            header:'Melanin',
            cover:melanin,
            dir: './resrc/melanin/',
            photos:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        }
    ]

class Images extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName :"Tyson"
      }
      this.viewImages = this.viewImages.bind(this);
    }
    
   // viewImages = (collection)=>{this.setState({
     //   firstName:"now showing" + collection
    //})}

    render() {
      return (
        <div>
          <h1>{this.state.firstName}</h1>
        </div>
      );
    }
  };

  export default Images