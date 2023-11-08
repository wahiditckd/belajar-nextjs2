//"use client";
import { Menu, Sidebar, Socmed } from "@/components";
//import React, { Component } from "react";

//class Header1 extends Component {
// render() {
//  return <div>ini class component</div>;
//  }
//}

//const Header3 = () => {
// return <div>Arrow function component</div>;
//};

export default function Header2() {
  return (
    <div>
      ini functional component
      <Menu />
      <Sidebar />
      <Socmed />
    </div>
  );
}
