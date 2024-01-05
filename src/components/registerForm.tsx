import React, { Component } from 'react'

// Type for RegForm
export type RegProps = {
  // using `interface` is also ok
  // Set onsave to save input
  onSave: (inputText: string) => void
}
type RegState = {
  inputText: string
}
export default class RegisterForm extends Component<RegProps, RegState> {
  state = { inputText: '' }

  // This is blessed with @type/react to handle text change
  onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({ inputText: e.currentTarget.value })
  }

  // This Handle Text Save
  handleSave = () => {
    const { inputText } = this.state
    const { onSave } = this.props
    onSave(inputText)
  }

  render() {
    return (
      <form data-test="registrationForm" className="registrationForm">
        <input
          data-testid="newUserEmail"
          type="text"
          value={this.state.inputText}
          onChange={this.onChange}></input>
        <button data-testid="newUserButton" onClick={this.handleSave}>
          Save
        </button>
      </form>
    )
  }
}
