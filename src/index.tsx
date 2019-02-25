import './theme.less';
import styles from './PersonalStyles.less';
import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    public render() {
        return (
            <>
                <h1>Home</h1>
                Works
                <div className={styles.box} ></div>
            </>
        );
    }
}
ReactDOM.render(<Home />, document.getElementById('app'));