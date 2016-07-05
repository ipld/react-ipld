import React, {Component, PropTypes} from 'react'
import Codemirror from 'react-codemirror'

import 'codemirror/mode/javascript/javascript'

export default class IPLDEditor extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    value: '{}',
    onChange () {}
  }

  constructor (props) {
    super(props)
    this.state = {
      code: props.value,
      options: {
        linenumbers: true,
        mode: 'javascript'
      }
    }
  }

  _updateCode = (newCode) => {
    this.setState({code: newCode})
    this.props.onChange(newCode)
  }

  render () {
    return (
      <Codemirror
        value={this.state.code}
        onChange={this._updateCode}
        options={this.state.options}
      />
    )
  }
}
