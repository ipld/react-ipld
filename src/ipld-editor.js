import React, {Component, PropTypes} from 'react'
import Codemirror from 'react-codemirror'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/selection/active-line'

export default class IPLDEditor extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    value: '{}',
    onChange () {}
  }

  componentDidMount () {
    this.state.cm = this.refs.reactCm.getCodeMirror()
  }

  constructor (props) {
    super(props)
    this.state = {
      code: props.value,
      options: {
        styleActiveLine: true,
        linenumbers: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        mode: 'application/json'
      },
      cm: null
    }
  }

  _updateCode = (newCode) => {
    this.setState({code: newCode})
    this.props.onChange(newCode)
  }

  setValue (newCode) {
    this.state.cm.setValue(newCode)
  }

  render () {
    return (
      <Codemirror
        ref='reactCm'
        value={this.state.code}
        onChange={this._updateCode}
        options={this.state.options}
      />
    )
  }
}
