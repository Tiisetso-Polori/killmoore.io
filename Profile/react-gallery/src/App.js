import React from 'react';
import Gallery from './Gallery';
//import Images from './Images';

class App extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      viewing: 'main',
     // screen: 
    };
  //  this.toggleImages = this.toggleImages.bind(this);
  }

  render(){
    if(this.state.viewing==='main'){
      return( 
        <div>

          <Gallery />
        </div>
      )
    }
    else{
      <Gallery />
    }
  }
}
export default App;

/* More Js for the project later on...

pass a callback as props - use for searching for collection --> later
optimize-re-renders-with-shouldcomponentupdate

*/