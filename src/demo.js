import React, {Component} from 'react'

import {IPLDEditor, IPLDStore, IPLDStoreList} from './index'
import {Set} from 'immutable'

const store = new IPLDStore()
const defaultCode = JSON.stringify(require('./default-object.json'), null, 2)

export default class Demo extends Component {
  state = {
    code: defaultCode,
    hashes: new Set()
  }

  _onAdd = (event) => {
    event.preventDefault()
    store
      .add(this.state.code)
      .then((hash) => {
        this.setState({hashes: this.state.hashes.add(hash)})
      })
      .catch((err) => {
        throw err
      })
  }

  _onCodeChange = (newCode) => {
    this.setState({code: newCode})
  }

  render () {
    return (
      <div>
        <h1>React IPLD</h1>
        <IPLDEditor value={this.state.code} onChange={this._onCodeChange} />
        <button onClick={this._onAdd}>Add object</button>
        <IPLDStoreList list={this.state.hashes} />
      </div>
    )
  }
}
