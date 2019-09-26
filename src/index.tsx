import './theme.less';
import styles from './PersonalStyles.less';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button } from 'antd';

// tslint:disable:no-any
function Example(props: any) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `ex1 You clicked ${count} times`;
    }, []);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
            <Example2 count={count}></Example2>
        </div>
    );
}
function Example2(props: any) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(props.count);
    }, [props]);
    return (
        <div>
            <Example3 count={count}></Example3>
        </div>
    );
}
function Example3(props: any) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("ex3=", props);
        setCount(props.count);
        // Update the document title using the browser API
        document.title = `ex3 You clicked ${count} times`;
    }, [props]);
    return (
        <div>
            <p>You clicked {count} times</p>
        </div>
    );
}

class Home extends React.Component {
    public render() {
        return (
            <>
                <Example></Example>
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
                < div className={styles.box} ></div >
            </>
        );
    }
}
ReactDOM.render(<Home />, document.getElementById('app'));