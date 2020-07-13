import React, { Component } from 'react';
import Child from './ClassChild';
import * as DM from './FuncComponent';
export default class Parent extends Component {
render() {
    return (
      <div>
          <h1>I am parent Component</h1>
          <Child Title="I am text from Parent Component"></Child>
          <DM.Demo1 Title="I am Text for function Component" ></DM.Demo1>
          <DM.Demo2 Title="I am Text for function Component" ></DM.Demo2>
          <DM.Demo2 Title="I am Text for function Component" ></DM.Demo2>
      </div>
    );
 }
}