import React from "react";

import styles from './button.module.css';

function Button({children, label}) {
    return <button type="button" className={styles.button}>{children}{label}</button>
}

export default Button