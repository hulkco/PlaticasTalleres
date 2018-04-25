import React, { Component } from 'react'
import MessageInput from '../component/messageInput'
import ChatBox from '../component/chatbox'

export default class ChatContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      typing: false
    }
    this.endMessages = React.createRef()
  }

  componentWillReceiveProps (newProps) {
    if (newProps.messages !== this.props.messages) { this.scrollToEnd() }
  }

  scrollToEnd = () => {
    this.endMessages.scrollIntoView({behavior: 'smooth'})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.socket.emit('new message', this.state.inputValue)
    // let message = this.refs.message.value;
    this.setState({
      inputValue: ''
    })
  }

  handleInputChange = (event) => {
    this.updateTyping()
    this.setState({ inputValue: event.target.value })
  }

  updateTyping = () => {
    // console.log('setting typer')
    let typingMaxTime = 2500 // ms
    if (this.props.connected) {
      if (!this.state.typing) {
        this.setState({
          typing: true
        })
        this.props.socket.emit('typing')
      }
      let lastTypingTime = (new Date()).getTime()
      setTimeout(() => {
        let typingTimer = (new Date().getTime())
        let timeDiff = typingTimer - lastTypingTime
        if (timeDiff >= typingMaxTime && this.state.typing) {
          this.props.socket.emit('stop typing')
          this.setState({
            typing: false
          })
        }
      }, typingMaxTime)
    }
  }

  render () {
    return (
      <div>
        <ChatBox
          endMessages={el => { this.endMessages = el }}
          isTyping={this.props.isTyping}
          messages={this.props.messages}
          username={this.props.username} />
        <MessageInput
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          inputValue={this.state.inputValue} />
      </div>
    )
  }
}