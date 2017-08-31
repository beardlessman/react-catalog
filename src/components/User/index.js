import React, { PropTypes, Component } from 'react'
import './style.css'

export default class User extends Component {
  buttonHandler(e) {
    e.preventDefault();
    this.props.changeHello('Привет')
  }
  render() {
    const user = this.props.data
    return ( 
      <div>
        {
          user.fetching ?
          <p>Загрузка...</p>
          :
          user.error ? <p className="error">Ошибка загрузки</p> : <p>{user.hello}, {user.name}!</p>
        }
        <button onClick={this.buttonHandler.bind(this)}>Дефолт приветствие</button>
      </div>
    )
  }
}