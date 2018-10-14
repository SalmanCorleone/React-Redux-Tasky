import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import Done from "../components/Done";
import Title from "../components/Title";

const mapStateToProps = state => ({  
  done : state.done,
});

class doneList extends Component {  
  render() {
    const { done } = this.props;

    return (
      <View>
        <Title>To-Do List</Title>        
        <Done list={done} />
        
      </View>
    );
  }
}

export default connect(mapStateToProps)(todoList);
