import React from "react";

class PopupAds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      fadeOut: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isShow: true });
    }, 800);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isShow !== this.state.isShow) {
      setTimeout(() => {
        this.setState({ isShow: false, fadeOut: true });
      }, 5000);
    }
  }

  render() {
    let renderPopup;

    if (this.state.isShow) {
      renderPopup = (
        <div className={`popup-wrapper`}>
          <div className="popup">
            <div class="popup-timer">
              <span class="seconds"></span> second(s) left
            </div>
            <div class="btn-close">x</div>
          </div>
        </div>
      );
    } else {
      renderPopup = (
        <>
          {this.state.fadeOut && (
            <div
              className={this.state.fadeOut ? "popup-wrapper fadeOut" : ""}
            ></div>
          )}
        </>
      );
    }

    return <>{renderPopup}</>;
  }
}

export default PopupAds;
