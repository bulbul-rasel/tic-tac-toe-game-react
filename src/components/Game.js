import React from 'react';

const game = (props) => {
    const classes = props.className ? `${props.className} square` : 'square';
    return (
        <span className={classes} onClick={props.onClick}>
            {props.state}
        </span>
    );
};

export default game;