import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'
import { connect } from "react-redux";

import { actionCreators } from "../reducers/todoListRedux";

const mapStateToProps = state => ({
    todos: state.todos,
    done : state.done,
    tasks : state.tasks,
    
  });

class taskList extends Component {
  onAddTodo = text => {
    const { dispatch } = this.props;
    dispatch(actionCreators.add(text));
  };


  render() {
      const {tasks}= this.props;
      const {todos}= this.props;

    return (
      <View style={styles.back}>
        <Title></Title>
        <Input
          placeholder={"Enter Quick Task"}
          onSubmitEditing={this.onAddTodo}
        />
        {/* <Text style={{color:'white'}}> {JSON.stringify(tasks)} </Text> */}
        <List list={tasks}></List>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  back: {
    backgroundColor: '#2c3e50',
    flex: 1,
    
  }
});

export default connect(mapStateToProps)(taskList);
