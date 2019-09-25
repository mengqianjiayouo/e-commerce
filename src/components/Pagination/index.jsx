import React, { Component } from "react";
import { Select } from "antd";
//需要参数 page pageSize total onPageChange onPageSizeChange
export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    const { page, pageSize, total } = this.props;
    let items = [];
    if (total > 10) {
      if (page >= 2) {
        items.push(
          <span
            key={1}
            onClick={() => {
              this.props.onPageChange(1);
            }}
          >
            {1}
          </span>
        );
      }
      if (page >= 3) {
        items.push(
          <span
            key={2}
            onClick={() => {
              this.props.onPageChange(2);
            }}
          >
            {2}
          </span>
        );
      }
      if (page - 2 > 3) {
        items.push(
          <span key={3} style={{ border: "none" }}>
            ...
          </span>
        );
      }
      if (page - 2 > 2) {
        items.push(
          <span
            key={page - 2}
            onClick={() => {
              this.props.onPageChange(page - 2);
            }}
          >
            {page - 2}
          </span>
        );
      }
      if (page - 1 > 2) {
        items.push(
          <span
            key={page - 1}
            onClick={() => {
              this.props.onPageChange(page - 1);
            }}
          >
            {page - 1}
          </span>
        );
      }
      items.push(
        <span key={page} className="active">
          {page}
        </span>
      );
      if (page + 1 <= total - 3) {
        items.push(
          <span
            key={page + 1}
            onClick={() => {
              this.props.onPageChange(page + 1);
            }}
          >
            {page + 1}
          </span>
        );
      }
      if (page + 2 <= total - 2) {
        items.push(
          <span
            key={page + 2}
            onClick={() => {
              this.props.onPageChange(page + 2);
            }}
          >
            {page + 2}
          </span>
        );
      }
      if (page + 2 < total - 3) {
        items.push(
          <span key={total - 3} style={{ border: "none" }}>
            ...
          </span>
        );
      }
      if (page <= total - 3) {
        items.push(
          <span
            key={total - 1}
            onClick={() => {
              this.props.onPageChange(total - 1);
            }}
          >
            {total - 1}
          </span>
        );
        items.push(
          <span
            key={total}
            onClick={() => {
              this.props.onPageChange(total);
            }}
          >
            {total}
          </span>
        );
      }
    } else {
      for (let number = 1; number <= total; number++) {
        items.push(
          <span
            key={number}
            className={number === page ? "active" : ""}
            onClick={() => {
              this.props.onPageChange(number);
            }}
          >
            {number}
          </span>
        );
      }
    }

    return (
      <div className="pagination">
        <span
          className={page === 1 ? "disable" : ""}
          onClick={() => {
            if (page === 1) return;
            this.props.onPageChange(page - 1);
          }}
        >
          上一页
        </span>
        {items}
        <span
          className={page === total ? "disable" : ""}
          onClick={() => {
            if (page === total) return;
            this.props.onPageChange(page + 1);
          }}
        >
          下一页
        </span>
        <Select
          value={pageSize}
          onChange={val => {
            this.props.onPageSizeChange(val);
          }}
        >
          <Select.Option value={5}>5</Select.Option>
          <Select.Option value={10}>10</Select.Option>
          <Select.Option value={15}>15</Select.Option>
          <Select.Option value={20}>20</Select.Option>
        </Select>
        /页
      </div>
    );
  }
}
