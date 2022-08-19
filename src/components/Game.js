import React from 'react';

const game = (props) => {
    const classes = props.className ? `${props.className} square` : 'square';
    return (
        <span className={classes}>
            x
        </span>
    );
};

export default game;