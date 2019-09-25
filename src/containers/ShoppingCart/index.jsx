import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "antd";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          order_id: 1,
          order_code: "po9493821123",
          platform: "88",
          order_platform_type: "uk",
          order_platform_code: "49338211039834551",
          create_type: "api",
          warehouse_id: 10,
          to_warehouse_id: 4,
          order_type: 0,
          country_code: "RMB",
          parcel_declared_value: "10.000",
          declared_weight: "2.000",
          shipping_fee_estimate: "1.000",
          currency_code: "RMB",
          parcel_contents: "this is my phone",
          parcel_quantity: 0,
          order_status: 1,
          order_hold_inventory: 0,
          order_exception_status: 0,
          order_waiting_status: 0,
          print_quantity: 0,
          add_time: "2019-07-31 01:51:22",
          update_time: "0000-00-00 00:00:00",
          order_paydate: "0000-00-00 00:00:00",
          reference_no: "",
          remark: "",
          site_id: "",
          seller_id: "1",
          sync_count: 0,
          sync_express_ship: 0,
          key: 1
        }
      ]
    };
  }
  componentDidMount() {}

  getData() {}
  showLogin() {}
  render() {
    const { data } = this.state;
    let that = this;
    // console.log(this.props.state);
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: record => ({})
    };

    const columns = [
      {
        title: "商品",
        dataIndex: "order_platform_code",
        align: "center",
        key: "order_platform_code"
      },
      {
        title: "单价",
        dataIndex: "parcel_declared_value",
        align: "center",
        key: "parcel_declared_value"
      },
      {
        title: "数量",
        dataIndex: "",
        align: "center",
        key: "",
        render(a, record, b) {
          return (
            <div>
              <span
                className="mins"
                style={{
                  display: "inlineBlock",
                  background: "#ccc",
                  color: "#fff",
                  cursor: "pointer",
                  padding: " 0 5px",
                  margin: " 0 9px"
                }}
                onClick={() => {
                  if (a.parcel_quantity <= 1) {
                    return;
                  } else {
                    data[b].parcel_quantity = a.parcel_quantity - 1;
                    that.setState({
                      data
                    });
                  }
                }}
              >
                -
              </span>
              {a.parcel_quantity}
              <span
                className="add"
                style={{
                  display: "inlineBlock",
                  background: "#ccc",
                  color: "#fff",
                  cursor: "pointer",
                  padding: " 0 5px",
                  margin: " 0 9px"
                }}
                onClick={() => {
                  data[b].parcel_quantity = a.parcel_quantity + 1;
                  that.setState({
                    data
                  });
                }}
              >
                +
              </span>
            </div>
          );
        }
      },
      {
        title: "金额",
        align: "center",
        key: "money",
        render(a) {
          return `¥ ${a.parcel_quantity * a.parcel_declared_value}`;
        }
      },
      {
        title: "平台",
        dataIndex: "platform",
        align: "center",
        key: "platform"
      },
      {
        title: "操作",
        align: "center",
        key: "action",
        render(a) {
          return <span>删除</span>;
        }
      }
    ];
    return (
      <div className="home orders">
        <div className="home_right">
          <div className="main">
            <div className="header">
              <span>我的购物车</span>
            </div>
            <div className="plats" style={{ padding: "  20px" }}>
              <Button style={{ marginRight: "40px" }} type="primary">
                Amazon
              </Button>
              <Button type="primary">Shopee</Button>
            </div>
            <div className="table">
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
              />
            </div>
            <div
              className="bom"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px"
              }}
            >
              <div>
                <Button type="primary">删除</Button>
              </div>
              <div>
                去结算合计(不含运费和订单处理费)：￥0.00
                <Button type="primary" style={{ marginLeft: 40 }}>
                  去结算
                </Button>
              </div>
            </div>
          </div>
        </div>
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
)(ShoppingCart);
