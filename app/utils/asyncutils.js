import React from 'react';
import get from 'lodash/get';
import {asyncComponent} from 'react-async-component';

class ErrorAsyncComponent extends React.Component {
    componentDidMount() {
        const {error} = this.props;

        if (error) {
            // Log meaningful error info, otherwise only unspecific react error will be shown
            console.error(error);
        }

        window.addEventListener('offline', this.retryAsyncResolve);
        window.addEventListener('online', this.retryAsyncResolve);
        this.retryAsyncResolve();
    }

    componentWillUnmount() {
        window.removeEventListener('offline', this.retryAsyncResolve);
        window.removeEventListener('online', this.retryAsyncResolve);
    }

    retryAsyncResolve = () => {
        if (get(window, 'navigator.onLine')) {
            // If online check up to 3 times if we can resolve async component
            if (ErrorAsyncComponent.retryCount < 3) {
                ErrorAsyncComponent.retryCount++;
                // Add some throttling (2 sec)
                setTimeout(this.props.retry, 2000);
            } else {
                // If we can't resolve with 3 retries, do a page reload
                ErrorAsyncComponent.retryCount = 0;
                location.reload();
            }
        }
    };

    static retryCount = 0;

    render() {
        return (
            <div>
                <h2>Sheesh... Seems like you're offline.</h2>
                <h4>This page will work when you're online again.</h4>
            </div>
        );
    }
}

function asyncComponentFactory(resolve) {
    return asyncComponent({
        resolve,
        LoadingComponent: () => <div>Loading async component ...</div>,
        ErrorComponent: props => <ErrorAsyncComponent {...props} />
    });
}

export default asyncComponentFactory;
