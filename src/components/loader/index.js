import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

const LoadingSpinner = (props) => {
    const { customContainerSpinnerStyles, customLoaderStyles } = props;
    return (
        <div
            className={classNames(
                styles.containerSpinnerStyle,
                customContainerSpinnerStyles
            )}>
            <div
                className={classNames(styles.loaderStyles, customLoaderStyles)}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
