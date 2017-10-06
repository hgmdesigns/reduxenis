import React, { Component } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Picker
} from 'react-native';
import { connect } from 'react-redux';
import { InputFeild } from '../common';
import { formData, signUp } from '../../actions';


class Register extends Component {
    render() {
        return (
        <KeyboardAvoidingView style={styles.container} behavior="position">
            <InputFeild
            placeholder=" "
            title="Name"
            onChangeText={value => { this.props.formData({ prop: 'email', value }); }}
            value={this.props.email}
            />
            <Picker
            style={styles.picker}
             selectedValue="1">
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
            </Picker>
            <InputFeild
            placeholder="should be more then 6 characters"
            title="Section"
            secureTextEntry
            onChangeText={value => { this.props.formData({ prop: 'password', value }); }}
            value={this.props.password}
            />
            <TouchableOpacity>
                <View style={styles.btn}>
                 <Text style={styles.text}>REGISTER</Text>
                </View>
            </TouchableOpacity>
      </KeyboardAvoidingView>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#F5FAFF',
        paddingTop: 124,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2189C5',
      },
    text: {
        margin: 16,
        color: 'white',
    },
    picker: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black'
    },
});

const mapStateToProps = ({ auth }) => {
    const { user } = auth;
    return { user };
};

export default connect(mapStateToProps, { formData, signUp })(Register);
