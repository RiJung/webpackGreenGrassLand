import './theme.less';
import styles from './PersonalStyles.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button } from 'antd';

class Home extends React.Component {
    public render() {
        return (
            <>
                <h1>Home</h1>
                <Icon type="home" />
                <Icon type="setting" theme="filled" />
                <Icon type="smile" theme="outlined" />
                <Icon type="sync" spin />
                <Icon type="smile" rotate={180} />
                <Icon type="loading" />
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                Works
            < div className={styles.box} ></div >
            </>
        );
    }
}
ReactDOM.render(<Home />, document.getElementById('app'));