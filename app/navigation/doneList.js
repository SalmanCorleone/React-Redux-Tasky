import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import Done from "../components/Done";
import Title from "../components/Title";
import { actionCreators } from "../reducers/todoListRedux";

const mapStateToProps = state => ({  
  done : state.done,
});

class doneList extends Component {  

  onXdone = (index) => {
    const { dispatch } = this.props;
    dispatch(actionCreators.x_done(index));
  };
  render() {
    const { done } = this.props;

    return (
      <View>
        <Title>Completed</Title>   
        <ScrollView style={{marginBottom: 80}}>
          <Done list={done} onPressItem={this.onXdone} />
        </ScrollView>     
        
        
      </View>
    );
  }
}

export default connect(mapStateToProps)(doneList);
