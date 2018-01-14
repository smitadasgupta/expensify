import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin} ) => (
    <section className="login-section">
        <div className="login-box">
            <h1 className="login-box__heading">Expensify App</h1>
            <p className="login-box__sub-heading">Log and track your expenses</p>
            <button onClick={startLogin} className="login-box__btn">Login with Google</button>
        </div>
    </section>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect (undefined, mapDispatchToProps)(LoginPage);