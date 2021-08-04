import React from "react";
import ReactDOM from "react-dom";
import styles from './index.scss';

const App = () => (
    <h1 className={styles.headerStyle}>React and TypeScript App</h1>
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);