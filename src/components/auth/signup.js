import React, { Component } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { InputFeild } from '../common';
import { formData } from '../../actions';

class SignUp extends Component {
    render() {
        console.log(this.props);
        return (
        <KeyboardAvoidingView style={styles.container} behavior="position">
            <InputFeild
            placeholder="exp: me@gmail.com"
            title="Email"
            onChangeText={value => { this.props.formData({ prop: 'email', value }); }}
            value={this.props.email}
            />
            <InputFeild
            placeholder="should be more then 6 characters"
            title="Password"
            secureTextEntry
            onChangeText={value => { this.props.formData({ prop: 'password', value }); }}
            value={this.props.password}
            />
            <TouchableOpacity>
                <View style={styles.btn}>
                 <Text style={styles.text}>SIGN UP</Text>
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
});

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password
    };
};

export default connect(mapStateToProps, { formData })(SignUp);
