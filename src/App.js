import React from "react";
import PopoutPortal from "./PopoutPortal";

import "./App.css";

const breakPopout = false;

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showWindowPortal: false,
      inputText: ""
    };

    this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
    this.closeWindowPortal = this.closeWindowPortal.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.closeWindowPortal();
    });
  }

  handleUserInput(event) {
    this.setState({ inputText: event.target.value });
  }

  toggleWindowPortal() {
    this.setState(state => ({
      ...state,
      showWindowPortal: !state.showWindowPortal
    }));
  }

  closeWindowPortal() {
    this.setState({ showWindowPortal: false });
  }

  render() {
    var popoutContent = breakPopout ? (
      <input value={this.state.inputText} onChange={this.handleUserInput} />
    ) : (
      <img src="http://memesbams.com/wp-content/uploads/2017/10/21-Much-Wow-Dog-Meme.jpg" alt="" height="300" width="300" />
    );
    return (
      <div>
        <button onClick={this.toggleWindowPortal}>
          {this.state.showWindowPortal ? "Close the" : "Open a"} Portal
        </button>
        <br /> <br />
        {this.state.showWindowPortal ? (
          <PopoutPortal closeWindowPortal={this.closeWindowPortal}>
            {popoutContent}
          </PopoutPortal>
        ) : (
          <div>
            Portal Content: <br />
            {popoutContent}
          </div>
        )}
      </div>
    );
  }
}

export default App;
