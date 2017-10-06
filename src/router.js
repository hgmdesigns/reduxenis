import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import SignUp from './components/auth/signup';
import Register from './components/auth/register';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene keyt="auth"> 
                    <Scene key="auth" component={SignUp} title="Please login" type={ActionConst.RESET} />
                </Scene>
                <Scene key="reg">
                  <Scene key="register" component={Register} title="Register" />     
                </Scene>
            </Scene>
         </Router>
    );
};

export default RouterComponent;
