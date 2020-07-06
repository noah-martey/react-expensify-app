import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Information</h1>
        <p>Info here:{ props.info }</p>
    </div>
);

const withHigherOrder = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is a privileged message do not share </p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const isUserAuthenticated = (WrappedComponent) => {
    return (props) => (
        <div>
         { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>User authentication is required </p> }
        </div>
        
    )
}

const AdminInfo = withHigherOrder(Info)
const AuthInfo = isUserAuthenticated(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info='have many details' />, document.getElementById('app'))