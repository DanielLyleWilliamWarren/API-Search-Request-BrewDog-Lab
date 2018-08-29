import React,{Component} from 'react';
import Beer from './Beer.js';

class BeerList extends Component {
render(){
  const beers = this.props.beers.map((beer) => {
 return(<Beer name = {beer.name} key={beer.id} image={beer.image_url} tagline={beer.tagline} description={beer.description}></Beer>);
})
   return(
     <div>
     <ul>

       {beers}
     </ul>

     </div>
   );
 }


}


export default BeerList;
