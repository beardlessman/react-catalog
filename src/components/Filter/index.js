import React, { Component } from 'react'
import './style.css'

export default class Filter extends Component {
    constructor (props) {
        super(props);

        this.state = {
            value: ''
        };
    }
    inputFilterText = (e) => {
      e.preventDefault();
      // const filterText = this.state.value;
      const filterText = this.refs.textInput.value;

      let newSettings = {...this.props.initialSet};

      newSettings.filter.text = filterText;
      newSettings.pagination.offset = 0;

      this.props.action(newSettings);
    }

    inputHandler = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className="filter">
                <form onSubmit={this.inputFilterText}>
                  <div className="input">
                    <input 
                      id="filterText" 
                      className="input__field"
                      ref="textInput"
                      type="text" 
                      placeholder="Search..."
                      value={this.state.value}
                      onChange={this.inputHandler}/>
                    <button type="submit" className="input__btn">GO</button>
                  </div>
                </form>
            </div>
        )
    }
}