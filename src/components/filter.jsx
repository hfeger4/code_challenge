import React, {Component} from 'react';
import {connect} from 'react-redux';

class Filter extends Component{
  constructor(props){
    super(props)
    this.handleColorChange = this.handleColorChange.bind(this);
  }
  displayColorOptions(color){
    let availableColors = {}
    this.props.widgets.forEach((widget) => {
      availableColors[widget.color] = true;
    });
    let availableColorsArray = Object.keys(availableColors);
    return availableColorsArray.map((color) => {
      return(
        <option key={color} value={`${color}`}>{color}</option>
      );
    })
  }
  handleColorChange(e){
    e.preventDefault();
    this.props.chooseColorsDropdown(e.currentTarget.value)
  }
  render(){
    return(
      <div>
        Color:
        <select onChange={this.handleColorChange}>
          <option value="">Display All</option>
          {this.displayColorOptions()}
        </select>
      </div>
    )
  }
}

export default Filter;
