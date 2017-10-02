import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

class InputFeild extends Component {
    render() {
      return (
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.input}
            secureTextEntry={this.props.secureTextEntry}
            placeholder={this.props.placeholder}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: '#6D747A',
      borderRadius: 4,
      height: 44,
      padding: 8,
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 24,
    },
    title: {
      fontSize: 24,
      color: '#0A1E30',
      paddingLeft: 16,
      marginBottom: 8,
    },
    error: {
      color: 'red',
      alignSelf: 'center',
    },
    spinner: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2189C5',
    }
  });
  
export { InputFeild };