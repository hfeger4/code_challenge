import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestSizes, requestMachines, createWidget, requestWidgets} from '../actions/widget_actions';
import {selectAllMachines, selectAllSizes} from '../reducers/selectors';

class CreateWidgetForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: "",
      description: "",
      color: "",
      size_id: 1,
      machine_id: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.props.requestSizes()
    this.props.requestMachines()
  }
  update(field){
    return event => {
      this.setState({[field]: event.target.value})
    }
  }
  handleSubmit(e){
    e.preventDefault();
    const {name, description, color, size_id, machine_id} = this.state
    this.props.createWidget(name, description ,color, size_id, machine_id)
    this.setState({
      name: "",
      description: "",
      color: "",
      size_id: 1,
      machine_id: 1
    });
  }
  displayMachineOptions(){
    return this.props.machines.map((machine,idx) => {
      return(
        <option key={`machine-${machine.id}`} value={machine.id}>{machine.title}</option>
      )
    })
  }
  displaySizeOptions(){
    return this.props.sizes.map((size,idx) => {
      return(
        <option key={`size-${size.id}`} value={size.id}>{size.title}</option>
      )
    })
  }
  render(){
    return(
      <div>
        Create New Widget:
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" value={this.state.name} onChange={this.update('name')}></input>
          <input type="text" placeholder="description" value={this.state.description} onChange={this.update('description')}></input>
          <input type="text" placeholder="color" value={this.state.color} onChange={this.update('color')}></input>
          <select onChange={this.update('machine_id')}>
            {this.displayMachineOptions()}
          </select>
          <select onChange={this.update('size_id')}>
            {this.displaySizeOptions()}
          </select>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  requestSizes: () => dispatch(requestSizes()),
  requestMachines: () => dispatch(requestMachines()),
  createWidget: (name, description, color, machine_id, size_id)=> dispatch(createWidget(name, description, color, machine_id, size_id)),
  requestWidgets: () => dispatch(requestWidgets())
})

const mapStateToProps = ({machines, sizes}) => {
  return{
    machines: selectAllMachines(machines),
    sizes: selectAllSizes(sizes)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateWidgetForm);
