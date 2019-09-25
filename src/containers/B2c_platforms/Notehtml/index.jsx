import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
class Notehtml extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      platform: ""
    };
  }
  componentDidMount() {
    this.changeContent();
  }
  changeContent() {
    var $iFrame = $("#content");
    $iFrame.attr(
      "src",
      "https://www.wxwerp.com/help/59a3ce98ef68fd1838e20bb9.html"
    );
    $iFrame[0].onload = function() {
      // 非IE
      /* let inner = $("#content")
        .find("body")
        .val();
      console.log(inner); */
    };
  }

  render() {
    const { amazoonData } = this.state;
    // console.log(this.props.state);
    let h = document.documentElement.clientHeight;
    return (
      <div className="home B2c">
        {/* <iframe
          id="content"
          src="https://www.wxwerp.com/help/59a3ce98ef68fd1838e20bb9.html"
          frameBorder="0"
          width="100%"
          height={h}
        /> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notehtml);
