import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
import React from "react";
import ReactDOM from "react-dom";
import { version, Select, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const Option = Select.Option;
var a = false;
var s = false;
ReactDOM.render(
  <div className="App">
    <h1>Please fork this codesandbox to reproduce your issue.</h1>
    <div>Current antd version: {version}</div>
    <div style={{ marginTop: "16px" }}>
      <Select
        notFoundContent={null}
        showSearch
        onSearch={value => {
          s = true;
          a = false;
        }}
        style={{ width: 200 }}
        placeholder="Select something"
        onChange={value => {
          a = true;
          s = false;
          alert(value);
        }}
        onBlur={() => {
          if (!a) {
            s = false;
            a = false;
            alert("blur");
          }
        }}
      >
        <Option key="0" value="0">
          {" "}
        </Option>
        <Option key="1" value="1">
          {" "}
          option 1{" "}
        </Option>
        <Option key="2" value="2">
          {" "}
          option 2{" "}
        </Option>
        <Option key="3" value="3">
          {" "}
          option 3{" "}
        </Option>
      </Select>
      <Button
        onMouseDown={e => e.preventDefault()}
        onMouseUp={() => {
          if (s === true && a === false) {
            alert("CLICK with api call");
            s = false;
          } else {
            alert("CLICK");
            a = false;
          }
        }}
      >
        submit
      </Button>
    </div>
  </div>,
  document.getElementById("root")
);
