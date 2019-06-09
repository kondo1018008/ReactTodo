import React, { Component } from 'react';
import Form from "./Form";
import List from "./List";
//import Timer from "./Timer";

export default class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      todo: [],
      count: 0,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    //this.printTime = this.printTime.bind(this);
    //this.countUp = this.countUp.bind(this);
  }
  //データ保存
  handleAdd(e) { 
    //console.log(e.target.title.value);
    e.preventDefault();//これ書かないとリダイレクトされる
    if (e.target.title.value !== '') {
      this.state.todo.push({ title: e.target.title.value , importance: e.target.importance.value});
      this.setState({ todo: this.state.todo });
    } else { 
      alert("文字を入力してください");
    }
    
    e.target.title.value = '';
  }

  handleRemove(i) { 
    this.state.todo.splice(i, 1);
    this.state.count++;
    this.setState({ todo: this.state.todo ,count: this.state.count});
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <p classNmae="siimple-box-title siimple--color-white">Number of did task:{this.state.count}</p>
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List todos={this.state.todo} handleRemove={this.handleRemove} />
        {/*<Timer min={0} sec={30} />*/}
      </div>
    );
  }
}