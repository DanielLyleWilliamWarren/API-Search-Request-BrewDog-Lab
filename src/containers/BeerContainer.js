import React, {Component} from 'react'
import SearchBeer from '../components/SearchBeer.js';
import BeerList from '../components/BeerList.js'


class BeerContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      beers: [],
      search: ''
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
}
   componentDidMount(){
    console.log("Going");
    const url = `https://api.punkapi.com/v2/beers`;
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((beers) => {
      this.setState({beers: beers})
    })}




  render(){
    return(
      <div>
      <h1 className="title">Brew Dog Beers</h1>
  <SearchBeer onSearchSubmit={this.handleSearchSubmit}/>
      <BeerList beers={this.state.beers}/>



      </div>
    );
  }

  handleSearchSubmit(event) {
    console.log("HELLO",event);
    this.setState({search: event})
      const url = `https://api.punkapi.com/v2/beers?beer_name=${event}`;
      fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((beers) => {
        this.setState({beers: beers})
      })
     this.render()
    }



    //TODO search the api



}

export default BeerContainer;
