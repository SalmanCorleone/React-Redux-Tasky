import React, { Component } from "react";
import { View , StyleSheet} from "react-native";
import { connect } from "react-redux";

import { actionCreators } from "../reducers/todoListRedux";
import List from "../components/List";
import Input from "../components/Input";
import Title from "../components/Title";

const mapStateToProps = state => ({
  todos: state.todos,
  done : state.done,
  
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
    const { todos } = this.props;

    return (
      <View style={styles.back}>
        <Title/>
        <Input
          placeholder={"Enter Quick Task"}
          onSubmitEditing={this.onAddTodo}
        />
        {/* <List list={todos} onPressItem={this.onRemoveTodo} />         */}
        <List list={todos} onPressItem={(i,text)=>this.props.navigation.push('Details',
        {
          itemId: i,
          otherParam: text,
        })} />        
        
      </View>
    );
  }
}

const styles= StyleSheet.create({
  back: {
    backgroundColor: '#2c3e50',
    
  }
});


export default connect(mapStateToProps)(todoList);
