import React, { Component } from 'react';
import Form from "./Form";
import List from "./List";
import Search from "./Search";
import ListSearch from "./ListSearch";
//import Timer from "./Timer";

export default class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      todo: [],
      count: 0,
      searchList:[]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.serchList = this.serchList.bind(this);
    this.resetList = this.resetList.bind(this);
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

  serchList(e) { 
    e.preventDefault();
    this.resetList();
    for (let i = 0; i < this.state.todo.length; i++) { 
      if (e.target.searchTitle.value === this.state.todo[i].title) {
        this.state.searchList.push({ title: this.state.todo[i].title , importance: this.state.todo[i].importance});
        }
    }
    this.setState({ searchList: this.state.searchList });
    
    e.target.searchTitle.value = '';
  }
  handleRemove(i) { 
    this.state.todo.splice(i, 1);
    this.state.count++;
    this.setState({ todo: this.state.todo ,count: this.state.count});
  }
  resetList() { 
    this.state.searchList = [];
    this.setState({searchList: this.state.searchList});
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <p classNmae="siimple-box-title siimple--color-white">Number of did task:{this.state.count}</p>
        <Search searchList={this.serchList} resetList={this.resetList} />
        <ListSearch todos={this.state.searchList} />
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List todos={this.state.todo} handleRemove={this.handleRemove} />
       
        {/*<Timer min={0} sec={30} />*/}
      </div>
    );
  }
}