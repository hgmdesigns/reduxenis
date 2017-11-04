import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import SignUp from './components/auth/signup';
import Register from './components/auth/register';
import Chat from './components/main/chat';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene keyt="auth"> 
                    <Scene key="auth" component={Chat} title="Please Sign Up" type={ActionConst.RESET} />
                </Scene>
                <Scene key="reg">
                  <Scene key="register" component={Register} title="Register" />     
                </Scene>
            </Scene>
         </Router>
    );
};

export default RouterComponent;
