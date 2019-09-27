import React, { Component } from "react";

import "./Main.css";

import dislike from "../assets/dislike.svg";

class InsertTodo extends Component {
  state = {
    devName: "",
    devText: "",
    list: []
  };

  addTodo = e => {
    e.preventDefault();

    const { devName, devText, list } = this.state;

    const dev = {
      devName,
      devText
    };

    list.push(dev);

    this.setState({
      list
    });
  };

  handleDev = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  deleteTodo = text => {
    const { list } = this.state;

    this.setState({
      list: list.filter(item => {
        return item.devText !== text;
      })
    });
  };

  render() {
    const { list } = this.state;

    return (
      <div className="main-body">
        <div className="form-search">
          <form>
            <h1>Hello Dev!! Say Something</h1>
            <input
              type="text"
              id="devName"
              placeholder="What's your name?"
              onChange={this.handleDev}
            />
            <textarea
              cols="80"
              rows="10"
              id="devText"
              placeholder="What's your Todo Today Dev?"
              onChange={this.handleDev}
            ></textarea>
            <button type="submit" onClick={this.addTodo}>
              Post Now
            </button>
          </form>
        </div>
        <div className="feeds">
          <p id="theFeeds">The feeds today</p>
          <ul className="user-feed">
            {list.length === 0 ? (
              <p className="Emptymessage">There's no feeds today :(</p>
            ) : (
              list.map(dev => (
                <li key={Math.random() * 100}>
                  <strong>{dev.devName}</strong>
                  <p>{dev.devText}</p>
                  <div className="buttons">
                    <button
                      type="button"
                      onClick={() => this.deleteTodo(dev.devText)}
                    >
                      <img src={dislike} alt="Dislike" />
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default InsertTodo;
