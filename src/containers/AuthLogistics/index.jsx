import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Button, Table, Modal } from "react-bootstrap";
class AuthLogistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      acountType: "",
      shopee: {
        account: "",
        account2: "",
        recive: ""
      },
      wish: {
        account: "",
        account2: "",
        client_secret: "",
        client_id: ""
      }
    };
  }
  componentDidMount() {
    this.checkIsLogin();
  }

  checkIsLogin() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.setState({
        islogin: true,
        show: false
      });
    }
  }
  changePlat(a) {
    this.props.dispatch({ type: "PLATCHANGE", plat: a });
  }
  addCount() {}
  showModal(a) {
    this.setState({
      show: true,
      acountType: a
    });
  }
  changeAccount(a, b) {
    this.setState({
      [a]: {
        ...this.state[a],
        ...b
      }
    });
  }
  render() {
    const { islogin, show, acountType, shopee, wish } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home B2c">
        {islogin ? (
          <div className="home_left">
            <SideBar {...this.props} />
          </div>
        ) : null}

        <div
          className="home_right"
          style={{ paddingLeft: islogin ? "118px" : 0 }}
        >
          <Topbar
            {...this.props}
            islogin={this.state.islogin}
            changePlat={a => {
              this.changePlat(a);
            }}
          />
          <ReturnTop />

          <div className="main">
            <div className="header"> 账号授权 > 物流账号授权</div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>shopee账号</th>
                  <th>账号缩写</th>
                  <th>收款账号</th>
                  <th>状态</th>
                  <th>API状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Footer />
        </div>
        <Modal
          dialogClassName="b2c_modal"
          show={show}
          onHide={() => {
            this.setState({ show: false });
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>请输入你想添加的账号</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {acountType === "shopee" ? (
              <div className="note">
                <p>温馨提示：</p>
                <h4>
                  1.shopee 店铺须首票订单产生后270天，才能使用第三方刊登软件。
                </h4>
                <h4>
                  2.授权操作需要登录shopee页面。请到您的shopee账号常用电脑上操作，以防账号
                  关联。
                </h4>
              </div>
            ) : (
              <div className="note">
                <p>温馨提示：</p>
                <h4 className="text-danger">
                  注意：授权操作需要登录Wish页面。请到您的Wish账号常用电脑上操作,以防账号关联;
                </h4>
              </div>
            )}
            {acountType === "shopee" ? (
              <ul className="inputs">
                <li>
                  <p>
                    shopee账号:可以是非shopee账号名的任何名称，您只需要保证自己和同事都认识它。
                  </p>
                  <input
                    type="text"
                    placeholder="请输入你想添加的账号"
                    value={shopee.account}
                    onChange={e => {
                      this.changeAccount("shopee", { account: e.target.value });
                    }}
                  />
                </li>
                <li>
                  <p>账号名缩写:2-3位的字母或数字，将用于系统中的简要展现。</p>
                  <input
                    type="text"
                    placeholder="请输入账号缩写"
                    value={shopee.account2}
                    onChange={e => {
                      this.changeAccount("shopee", {
                        account2: e.target.value
                      });
                    }}
                  />
                </li>
                <li>
                  <p>
                    收款账号:请确认Paypal账号已与对应的shopee做好关联,该账号将提供给shopee收取刊登费用，并接受买家的订单付款。
                  </p>
                  <input
                    type="text"
                    placeholder="请输入收款账号"
                    value={shopee.recive}
                    onChange={e => {
                      this.changeAccount("shopee", { recive: e.target.value });
                    }}
                  />
                </li>
              </ul>
            ) : (
              <ul className="inputs">
                <li>
                  <p>
                    Wish账号:可以是非Wish账号名的任何名称，您只需要保证自己和同事都认识它。
                  </p>
                  <input
                    type="text"
                    placeholder="请输入你想添加的账号"
                    value={wish.account}
                    onChange={e => {
                      this.changeAccount("wish", { account: e.target.value });
                    }}
                  />
                </li>
                <li>
                  <p>账号名缩写:2-3位的字母或数字，将用于系统中的简要展现。</p>
                  <input
                    type="text"
                    placeholder="请输入账号缩写"
                    value={wish.account2}
                    onChange={e => {
                      this.changeAccount("wish", { account2: e.target.value });
                    }}
                  />
                </li>
                <li>
                  <p>
                    client_id(wish中创建的app中的属性):请确保填写正确,否则无法绑定账号。
                  </p>
                  <input
                    type="text"
                    placeholder="请输入Wish账号中App的client_id"
                    value={wish.client_id}
                    onChange={e => {
                      this.changeAccount("wish", { client_id: e.target.value });
                    }}
                  />
                </li>
                <li>
                  <p>
                    client_secret(wish中创建的app中的属性):请确保填写正确,否则无法绑定账号。
                  </p>
                  <input
                    value={wish.client_secret}
                    onChange={e => {
                      this.changeAccount("wish", {
                        client_secret: e.target.value
                      });
                    }}
                    type="text"
                    placeholder="请输入Wish账号中App的client_secret"
                  />
                </li>
              </ul>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.setState({ show: false });
              }}
            >
              取消
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.setState(
                  {
                    show: false
                  },
                  () => {
                    this.addCount();
                  }
                );
              }}
            >
              确定
            </Button>
          </Modal.Footer>
        </Modal>
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
)(AuthLogistics);
