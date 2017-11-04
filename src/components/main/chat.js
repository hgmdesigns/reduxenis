import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';

class Chat extends React.Component {

  componentWillMount() {
    console.log(this.props);
  }
  //Nessages an empty variable
  componentDidMount() {
    
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
   
  }
  
  componentWillUnmount() {
    Backend.closeChat();
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}  
        user={{
          _id: Backend.getUid(),
          name: this.props.name,
        }}
        loadEarlier
      />
    );
  }
}
Chat.defaultProps = {
  name: 'Hassan',
};

Chat.propTypes = {
  name: React.PropTypes.string,
};

const mapStateToProps = ({ chat }) => {
  const { messages } = chat;
  return { messages };
};

export default connect(mapStateToProps)(Chat);
