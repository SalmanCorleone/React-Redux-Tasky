import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import { connect } from "react-redux";

import { actionCreators } from "./app/reducers/todoListRedux";
import List from "./app/components/List";
import Input from "./app/components/Input";
import Title from "./app/components/Title";
import Done from "./app/components/Done";

const mapStateToProps = state => ({
  todos: state.todos,
  done : state.done
});

class App extends Component {
  onAddTodo = text => {
    const { dispatch } = this.props;
    dispatch(actionCreators.add(text));
  };

  onRemoveTodo = (index, todo) => {
    const { dispatch } = this.props;
    dispatch(actionCreators.remove(index,todo));
  };

  render() {
    const { todos, done } = this.props;

    return (
      <View>
        <Title>To-Do List</Title>
        <Input
          placeholder={"Type a todo, then hit enter!"}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos} onPressItem={this.onRemoveTodo} />
        <Done list={done} />
        
      </View>
    );
  }
}

export default connect(mapStateToProps)(App);
