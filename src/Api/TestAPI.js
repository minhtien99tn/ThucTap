import React, { Component } from "react";
import axios from "axios";
export default class TestAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPart: "",
      items: [],
    };
  }
  async getPart1ById() {
    const result = await axios({
      method: "get",
      url: "https://nikaws.cf/api/getpart1/1",
    });
    return result.data;
  }
  async getData() {
    const receiveValue = await this.getPart1ById();
    this.setState({
      dataPart: receiveValue,
      items: receiveValue.document,
    });
    console.log(this.state.items[0].url);
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    const { tmp_state, items } = this.state;
    return (
      <div className="app">
        {/* <div>{JSON.stringify(items)}</div> */}
        {items.map((number) => (
          <div class="img-question">
            <img src={`https://nikaws.cf/${number.url}`}></img>
          </div>
        ))}
      </div>
    );
  }
}
