import React, {Component} from 'react';
import {connect} from 'react-redux';
import { requestWidgets } from '../actions/widget_actions';
import {selectAllWidgets} from '../reducers/selectors';
import Filter from './filter';

class Homepage extends Component{
  constructor(props){
    super(props)
    this.state = {
      filterColor: ''
    }
    this.widgetGallery = this.widgetGallery.bind(this);
    this.chooseColorsDropdown = this.chooseColorsDropdown.bind(this);
  }
  componentDidMount(){
    this.props.requestWidgets();
  }
  chooseColorsDropdown(color){
    this.setState({filterColor: color});
  }
  widgetGallery(){
    const {filterColor} = this.state
    const widgets = this.props.widgets.filter(widget => {
      if(filterColor === "") return true
        return widget.color === filterColor
      }
    )

    return widgets.map(( widget, idx) => {
      return(
        <li key={`widget-${idx}`}>
          {widget.name}
        </li>
      )
    })
  }
  render(){
    const {widgets} = this.props
    if(widgets === undefined){
      return null;
    }
    return(
      <div>
        <Filter widgets={widgets} chooseColorsDropdown={this.chooseColorsDropdown} />
        <ul>
          {this.widgetGallery()}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  requestWidgets: () => dispatch(requestWidgets())
})

const mapStateToProps = ({ widgets }) => {
  return {
    widgets: selectAllWidgets(widgets)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
