import moment from "moment";
import React, { Component } from "react";

class Timer extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const midnight = "04:25:40";
    let nowTime = null;

    nowTime = moment().format("HH:mm:ss");
    if (nowTime === midnight) {
      // this.setState((prev) => ({
      //   ...prev,
      //   products: [],
      // }));
      //localStorage.removeItem("visitedItem");
      // 00시 기준 최근 조회 이력 초기화 관심 없는 상품 목록 초기화
    }
  }

  render() {
    return (
      <div>
        <p>{moment().format("MM월DD일")}</p>
        <p>{moment().format("HH:mm:ss")}</p>
      </div>
    );
  }
}

export default Timer;
