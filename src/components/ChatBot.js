import React, { Component } from 'react'

export class ChatBot extends Component {
    componentDidMount() {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"2f567ddc98cb0af025aa236d2cf9ab7b2","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    }
  render() {
    return (
      <></>
    )
  }
}

export default ChatBot