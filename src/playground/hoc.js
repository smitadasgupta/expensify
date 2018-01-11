//HOC - Higher order component
// A component that renders another component

//it is used to re-use code

//Render hiijacking
//prop manipulation
//abstract state


import React from 'react';
import ReactDOM from 'react-dom';



const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminwarning = (WrappedComponent) => {
    return (props) => (
        <div>
            
            {props.isAdmin && <p>This is private info. Please don't share.</p>}
            
            <WrappedComponent {...props}/>
        </div>
    );
};


const requreAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>

            {props.isAuthenticated ? <WrappedComponent {...props} />: <p>please login</p>}
            
        </div>
    );
};
//requreAuthentication

const AuthInfo = requreAuthentication(Info);
const AdminInfo = withAdminwarning(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are the details" />, document.getElementById('app'));