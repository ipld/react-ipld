import React, {Component, PropTypes} from 'react'
import {Set} from 'immutable'

function renderItem (hash, onClick) {
  return (
    <li key={hash} className='ipld-store-list-item'>
      <a href='' onClick={onClick(hash)}>{hash}</a>
    </li>
  )
}

export default class IPLDStoreList extends Component {
  static propTypes = {
    list: PropTypes.instanceOf(Set).isRequired,
    onItemClick: PropTypes.func
  }

  static defaultProps = {
    onItemClick () {}
  }

  _onClickItem = (hash) => (event) => {
    event.preventDefault()
    this.props.onItemClick(hash)
  }

  render () {
    return (
      <ul className='ipld-store-list'>
        {this.props.list.map((elem) => renderItem(elem, this._onClickItem))}
      </ul>
    )
  }
}
