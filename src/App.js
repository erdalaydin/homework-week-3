import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'


const data = [

  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

 class App extends Component{

  state = {
    value:""
  }
  

  updateSelection = (option) =>{  
    this.setState({value: option.target.value});
  }
   
  addModel = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: data.filter((list) => {
        if (list.name === this.state.value) {
          return list
        }    
      })
    })
  }


  render(){

    return (
      <div className="App">
        <select value={this.state.value} onChange={this.updateSelection}>
           <option key="default" value="">-- pick a model --</option>
           {Object.entries(data).map(([key,val]) => <option key={key} value={val.name} >{val.name} ({val.year})</option>)} 
        </select>
        <button onClick={this.addModel} disabled={this.state.value===""}>add</button>
      </div>
    )
  }

}


export default connect()(App)