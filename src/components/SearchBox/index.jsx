import React, { Component } from "react";
export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  componentDidMount() {}
  render() {
    const { searchValue } = this.state;
    return (
      <div className="search_box">
        <div className="input_group">
          <input
            name="keyword"
            placeholder="请输入商品英文名称或货号"
            type="text"
            onChange={a => {
              this.setState({
                searchValue: a
              });
            }}
            value={searchValue}
          />
          <div className="search_btn">
            <span className="glyphicon glyphicon-search" />
          </div>
        </div>
      </div>
    );
  }
}
