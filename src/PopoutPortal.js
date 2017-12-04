import React from 'react'
import ReactDOM from 'react-dom'


class PopoutPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.externalWindow = null;
    this.container = null;
    this.state = { windowLoaded: false }
  }

  componentDidMount() {
    this.externalWindow = window.open('', '', 'width=600,height=400,resizable=1');
    
    var container = this.externalWindow.document.createElement("div");
    this.container = container;
    
    this.externalWindow.document.body.appendChild(container);
    
    this.externalWindow.document.title = 'A React Portal Window';
    
    this.setState({windowLoaded: true})
    
    this.externalWindow.addEventListener('beforeunload', () => {
      this.props.closeWindowPortal();
    });
  }

  componentWillUnmount() {
    this.externalWindow.close();
  } 
  
  render() {
    return this.state.windowLoaded ? ReactDOM.createPortal(this.props.children, this.container) : null;
  }
}

export default PopoutPortal;