import React, { Component } from "react";
import { apiList2 } from "../../server/apiMap";
import { Api } from "../../server/_ajax";
import { Collapse, Row, Col, Pagination } from "antd";
import { PropTypes } from "prop-types";

const { Panel } = Collapse;
const api = new Api();
class SubCateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 20,
      total: 0,
      list: []
    };
    this.cate = this.props.cate;
    this.subCate = this.props.subCate;
  }
  componentDidMount() {
    this.getList();
  }
  getList() {
    const { page, pageSize } = this.state;
    api.$get(
      apiList2.messageList.path,
      {
        cate: this.cate,
        subCate: this.subCate,
        currentPage: page,
        limit: pageSize
      },
      res => {
        let list = res.messageList;
        this.setState({
          list: [...list],
          total: res.totalCount
        });
      },
      code => {
        if (code === 401) {
          this.props.history.push("/signin");
        }
      }
    );
  }
  pageChange(page, size) {
    this.setState(
      {
        page: page,
        pageSize: size
      },
      () => {
        if (
          this.props.pageChange &&
          typeof this.props.pageChange == "function"
        ) {
          this.props.pageChange(page, size);
          return;
        }
        this.getList();
      }
    );
  }
  render() {
    const { list, total, page, pageSize } = this.state;
    return list.length > 0 ? (
      <div>
        <Collapse bordered={false}>
          {list.map((a, b) => {
            return (
              <Panel header={a.title} key={b + 1 + ""}>
                <div
                  dangerouslySetInnerHTML={{ __html: a.content }}
                  className="message_content"
                />
              </Panel>
            );
          })}
        </Collapse>
        {pageSize < total ? (
          <Pagination
            current={page}
            pageSize={pageSize}
            onChange={(page, size) => {
              this.pageChange(page, size);
            }}
            style={{ padding: "15px 0" }}
            total={total}
            showSizeChanger
            showQuickJumper
          />
        ) : null}
      </div>
    ) : (
      <div>暂无数据</div>
    );
  }
}
SubCateItem.propTypes = {
  cate: PropTypes.string.isRequired,
  subCate: PropTypes.string.isRequired,
  pageChange: PropTypes.func
};
export default SubCateItem;
