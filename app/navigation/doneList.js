import React, { Component } from "react";
import { View, ScrollView } from "react-native";
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
        <ScrollView>
          <Done list={done} />
        </ScrollView>     
        
        
      </View>
    );
  }
}

export default connect(mapStateToProps)(doneList);
