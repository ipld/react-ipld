import React, {Component, PropTypes} from 'react'
import {Set} from 'immutable'

function renderItem (hash) {
  return (
    <li key={hash} className='ipld-store-list-item'>
      <span>{hash}</span>
    </li>
  )
}

export default class IPLDStoreList extends Component {
  static propTypes = {
    list: PropTypes.instanceOf(Set)
  }

  render () {
    return (
      <ul className='ipld-store-list'>
        {this.props.list.map(renderItem)}
      </ul>
    )
  }
}
