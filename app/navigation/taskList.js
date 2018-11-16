import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'
import { connect } from "react-redux";
import {Button, Text, Icon, Fab} from 'native-base'

import { actionCreators } from "../reducers/todoListRedux";

const mapStateToProps = state => ({
    done : state.done,
    tasks : state.tasks,
    
  });

class taskList extends Component {
  
  onAddTodo = text => {
    const { dispatch } = this.props;
    dispatch(actionCreators.add(text));
  };
  onTick=(index, item) => {
    const { dispatch } = this.props;
    dispatch(actionCreators.remove(index, item));
  }
  onReset=()=>{
    const { dispatch } = this.props;
    dispatch(actionCreators.reset());
  }


  render() {
      const {tasks}= this.props;

    return (
      <View style={styles.back}>
        <Title></Title>
        <Button onPress={this.onReset}><Text>Reset</Text></Button>

        <Input
          placeholder={"Enter Quick Task"}
          onSubmitEditing={this.onAddTodo}
        />      
        <List list={tasks} 
        onTick={this.onTick} 
        onPressItem={(i,text)=>this.props.navigation.push('Details',
        {
          itemId: i,
          item: text,
        })}        
        
        ></List>
        <View>
          <Fab
              active='true'                    
              direction="up"
              containerStyle={{ }}
              style={{ backgroundColor: '#5067FF' }}
              position="bottomRight"
              onPress={() => this.props.navigation.navigate('Create') }>
              <Icon name="add" />
          </Fab>
          </View>
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
