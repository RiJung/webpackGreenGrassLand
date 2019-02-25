import './theme.less';
import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    public render() {
        return (
            <>
                <h1>Home</h1>
                Works
            </>
        );
    }
}

const indexHtmlDOMFound = document.getElementById('app');
if(indexHtmlDOMFound){
    ReactDOM.render(<Home />, document.getElementById('app'));
}