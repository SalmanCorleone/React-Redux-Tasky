import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { actionCreators } from "./app/reducers/todoListRedux";
import List from "../components/List";
import Input from "../components/Input";
import Title from "../components/Title";

const mapStateToProps = state => ({
  todos: state.todos,
  done : state.done
});

class todoList extends Component {
  onAddTodo = text => {
    const { dispatch } = this.props;
    dispatch(actionCreators.add(text));
  };

  onRemoveTodo = (index, item) => {
    const { dispatch } = this.props;
    dispatch(actionCreators.remove(index, item));
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
        
      </View>
    );
  }
}

export default connect(mapStateToProps)(todoList);
