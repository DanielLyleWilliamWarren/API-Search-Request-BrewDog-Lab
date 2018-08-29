import React, {Component} from 'react'


class SearchBeer extends Component {
  constructor(props){
    console.log(props);
    super(props);

    this.state = {
      text: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleTextChange(evt){

    this.setState({text: evt.target.value});

}
  handleSubmit(evt){
   evt.preventDefault();
   console.log("thing",evt);


  const text = this.state.text.trim();
  if (!text) return;

    //TODO update the list of comments
    this.props.onSearchSubmit(this.state.text);

      //TODO clear the form
    this.setState({text:''});
};

render(){
return (
      <div className="search">

        <form class="comment-form" onSubmit={this.handleSubmit} >
      <input type="text" value={this.state.text} placeholder="search a beer by name" onChange={this.handleTextChange}/>
      <input type="submit" value="Submit"/>
       </form>





      </div>
    );
};
};

export default SearchBeer;
